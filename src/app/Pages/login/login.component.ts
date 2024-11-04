import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
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
  apiUrl: string = 'https://cadastroeventfy-production.up.railway.app/organizadores';
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
    emailLogin: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(50),
    ]),
    senhaLogin: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^(?!.*\\s).*$'),
      Validators.minLength(8),
      Validators.maxLength(50),
    ]),
  });
  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }
  verificarEmail() {
    const email = this.LoginForm.get('emailLogin')?.value;

    if (email) {
      this.http
        .get<EmailCheckResponse>(
          `${this.apiUrl}/verificar-email?email=${email}`
        )
        .pipe(catchError(() => of({ existe: false })))
        .subscribe((resposta: EmailCheckResponse) => {  // Agora está definido
          this.emailExiste = resposta.existe;

          if (this.emailExiste) {
            console.log('O email existe no sistema.');
          } else {
            console.log('O email não existe no sistema.');
            this.LoginForm.get('emailLogin')?.setErrors({
              emailNaoExiste: true,
            });
          }
        });
    }
  }

  onEnviar() {
    this.LoginForm.markAllAsTouched();
    this.verificarEmail();

    if (this.LoginForm.valid && this.emailExiste) {
      const { emailLogin, senhaLogin } = this.LoginForm.value;

      this.http.post<LoginResponseDTO>(`${this.apiUrl}/login`, {
        emailOrganizador: emailLogin,
        senhaOrganizador: senhaLogin
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
        }
      });
    } else {
      console.warn('Email não existe ou formulário inválido.');
    }
  }
}
