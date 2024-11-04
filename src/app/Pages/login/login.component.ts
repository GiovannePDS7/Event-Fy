import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginResponseDTO } from 'src/app/models/login-response-dto';

interface EmailCheckResponse {  // Definindo a interface aqui
  existe: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  typeSenha: string = 'password';
  apiUrl: string = 'https://logineventfy-production.up.railway.app';
  emailExiste: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/inicial']);
    }
  }

  LoginForm = this.formBuilder.group({
    emailOrganizador: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(50),
    ]),
    senhaOrganizador: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^(?!.*\\s).*$'),
      Validators.minLength(8),
      Validators.maxLength(50),
    ]),
  });
  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }
  verificarEmail(): Observable<boolean> {
    const email = this.LoginForm.get('emailOrganizador')?.value;

    if (email) {
      return this.http.get<EmailCheckResponse>(`${this.apiUrl}/organizadores/verificar-email?email=${email}`).pipe(
        map((resposta: EmailCheckResponse) => {
          this.emailExiste = resposta.existe;
          if (this.emailExiste) {
            console.log("Email verificado no banco");
          }
          return this.emailExiste;
        }),
        catchError(() => {
          this.emailExiste = false;
          return of(false);
        })
      );
    } else {
      this.emailExiste = false;
      return of(false);
    }
  }
  onEnviar() {
    this.LoginForm.markAllAsTouched();

    this.verificarEmail().subscribe((existe: any) => {
      console.log('entrou 1');
      console.log(this.LoginForm);
      console.log(existe);

      if (this.LoginForm.valid && existe) {
        const { emailOrganizador, senhaOrganizador } = this.LoginForm.value;
        console.log('entrou 2');
        this.http.post<LoginResponseDTO>(`${this.apiUrl}/login/authenticate`, {
          emailOrganizador: emailOrganizador,
          senhaOrganizador: senhaOrganizador
        }).subscribe({
          next: (response: LoginResponseDTO) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('organizadorId', response.id.toString());
            localStorage.setItem('nomeOrganizador', response.nome);
            localStorage.setItem('emailOrganizador', response.email);
            localStorage.setItem('contatoOrganizador', response.contato);
            localStorage.setItem('fotoOrganizador', response.foto);

            this.router.navigate(['/inicial']);
          },
          error: (err: HttpErrorResponse) => {
            console.error('Erro de autenticação', err);
            if (err.error && err.error.message) {
              alert(`Erro: ${err.error.message}`);
            } else {
              alert('Erro desconhecido, tente novamente.');
            }
          }
        });
      }  else {
        console.warn('Formulário inválido:', this.LoginForm.errors);
        console.log('Erros do campo email:', this.LoginForm.get('emailOrganizador')?.errors);
        console.log('Erros do campo senha:', this.LoginForm.get('senhaOrganizador')?.errors);
      }
    });
  }

}
