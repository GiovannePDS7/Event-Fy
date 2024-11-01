import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginResponseDTO } from 'src/app/models/login-response-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  typeSenha: string = 'password';
  apiUrl: string = 'https://cadastroeventfy-production.up.railway.app/organizadores';
  emailExiste: boolean = false;

  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

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

  verificarEmail() {
    const email = this.LoginForm.get('emailOrganizador')?.value;

    if (email) {
      this.http
        .get<{ existe: boolean }>(
          `${this.apiUrl}/verificar-email?email=${email}`
        )
        .pipe(catchError(() => of({ existe: false })))
        .subscribe((resposta) => {
          this.emailExiste = resposta.existe;
          if (this.emailExiste) {
            this.LoginForm.get('emailOrganizador')?.setErrors({
              emailJaExiste: true,
            });
          }
        });
    }
  }


 onEnviar() {
  this.LoginForm.markAllAsTouched();

  if (this.LoginForm.valid && !this.emailExiste) {
    const { emailLogin, senhaLogin } = this.LoginForm.value;

    // Envia a requisição de autenticação para o backend
    this.http.post<LoginResponseDTO>('/login', {
      emailOrganizador: emailLogin,
      senhaOrganizador: senhaLogin
    }).subscribe({
      next: (response) => {
        alert('entrou -> next');
        localStorage.setItem('token', response.token);
        localStorage.setItem('organizadorId', response.id.toString());
        localStorage.setItem('nomeOrganizador', response.nome);
        localStorage.setItem('emailOrganizador', response.email);
        localStorage.setItem('contatoOrganizador', response.contato);
        localStorage.setItem('fotoOrganizador', response.foto);


        this.router.navigate(['/inicial']);
      },
      error: (err) => {
        console.error('Erro de autenticação', err);
      }
    });
  }
}

}
