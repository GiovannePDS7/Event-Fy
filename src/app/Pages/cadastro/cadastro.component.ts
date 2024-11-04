import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

interface EmailCheckResponse {
  existe: boolean;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent {
  typeInputConfirm: string = 'password';
  typeSenha: string = 'password';
  typeConfirmSenha: string = 'password';
  emailExiste: boolean = false;
  apiUrl: string = 'https://cadastroeventfy-production.up.railway.app/organizadores';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  cadastroForm = this.formBuilder.group({
    nomeOrganizador: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    emailOrganizador: this.formBuilder.control('', [Validators.email, Validators.required, Validators.maxLength(50)]),
    senhaOrganizador: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?!.*\\s).*$'), Validators.minLength(8), Validators.maxLength(50)]),
    confirmarSenha: this.formBuilder.control('', [Validators.required])
  });

  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }
  visibilidadeConfirmSenha(): void {
    this.typeConfirmSenha = this.typeConfirmSenha === 'password' ? 'text' : 'password';
  }
  verificarEmail() {
    const email = this.cadastroForm.get('emailOrganizador')?.value;

    if (email) {
      this.http.get<EmailCheckResponse>(`${this.apiUrl}/verificar-email?email=${email}`).pipe(
        catchError(() => of({ existe: false }))
      ).subscribe((resposta: EmailCheckResponse) => {
        this.emailExiste = resposta.existe;
        if (this.emailExiste) {
          this.cadastroForm.get('emailOrganizador')?.setErrors({ emailJaExiste: true });
        }
      });
    }
  }

  onEnviar() {
    this.cadastroForm.markAllAsTouched();
    if (this.cadastroForm.valid && !this.emailExiste) {
      const formData = this.cadastroForm.value;
      this.http.post(`${this.apiUrl}/cadastrar`, formData).subscribe(
        resposta => {
          console.log('Cadastro realizado com sucesso!', resposta);
          alert('Cadastro efetuado');
          this.router.navigate(['/login']);
        },
        erro => {
          console.log('Erro ao cadastrar', erro);
          console.log(formData);
        }
      );
    } else {
      console.log('Formulário inválido');
      alert('Cadastro inválido, verifique os avisos');
    }
  }
}
