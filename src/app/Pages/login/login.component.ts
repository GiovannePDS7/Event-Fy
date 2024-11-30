import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseDTO } from 'src/app/models/login-response-dto';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  typeSenha: string = 'password';
  apiUrl: string = 'https://logineventfy-production.up.railway.app';
  // apiUrl: string = 'http://localhost:8080';

  // Definindo o LoginForm no construtor do componente
  LoginForm = this.formBuilder.group({
    emailOrganizador: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(50),
    ]),
    senhaOrganizador: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^(?!.*\\s).*$'), // Não permitir espaços
      Validators.minLength(8),
      Validators.maxLength(50),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
   // const token = localStorage.getItem('token');
   //if (token) {
    // this.router.navigate(['/inicial']);
    //}
  }

  // Função para alternar a visibilidade da senha
  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }

  // Função para enviar o login
  onEnviar() {
    // Marca todos os campos como tocados para exibir os erros de validação
    this.LoginForm.markAllAsTouched();

    // Verifica se o formulário é válido
    if (this.LoginForm.valid) {
      const { emailOrganizador, senhaOrganizador } = this.LoginForm.value;

      this.http.post<LoginResponseDTO>(`${this.apiUrl}/login/authenticate?usuario=${emailOrganizador}&senha=${senhaOrganizador}`, {
      }).subscribe({
        next: (response: LoginResponseDTO) => {
          // Armazenando no localStorage os dados recebidos
          localStorage.setItem('token', response.token);
          localStorage.setItem('organizadorId', response.id.toString());
          localStorage.setItem('nomeOrganizador', response.nome);
          localStorage.setItem('emailOrganizador', response.emailOrganizador);
          localStorage.setItem('contatoOrganizador', response.contato ?? '');
          localStorage.setItem('fotoOrganizador', response.foto ?? '');

          // Redireciona para a página inicial
          this.router.navigate(['/inicial']);
          console.log(response);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro de autenticação', err);
          if (err.error && err.error.message) {
            alert(`Erro: ${err.error.message}`);
          } else {
            alert('Verifique se os dados estão corretos.');
          }
        }
      });
    } else {
      console.warn('Formulário inválido', this.LoginForm.errors);
    }
  }
}
