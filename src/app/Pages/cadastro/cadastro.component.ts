import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent {
  typeInput: string = 'password';
  typeInputConfirm: string = 'password';
  typeSenha: string = 'password';
  typeConfirmSenha: string = 'password';

  emailExiste: boolean = false;
  apiUrl: string = 'https://cadastroeventfy-production.up.railway.app/organizadores';

  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }
  visibilidadeConfirmSenha(): void {
    this.typeConfirmSenha = this.typeConfirmSenha === 'password' ? 'text' : 'password';
  }

  constructor(private formBuilder: FormBuilder,  private http: HttpClient) { }

  cadastroForm = this.formBuilder.group({
    nomeOrganizador: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    emailOrganizador: this.formBuilder.control('', [Validators.email, Validators.required, Validators.maxLength(50)]),
    senhaOrganizador: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?!.*\\s).*$'), Validators.minLength(8), Validators.maxLength(50)]),
    confirmarSenha: this.formBuilder.control('', [Validators.required])
  });


  verificarEmail() {
    const email = this.cadastroForm.get('emailOrganizador')?.value;  
  
    if (email) {
      this.http.get<{ existe: boolean }>(`${this.apiUrl}/verificar-email?email=${email}`).pipe(
        catchError(() => of({ existe: false })) 
      ).subscribe(resposta => {
        this.emailExiste = resposta.existe;
        if (this.emailExiste) {
          this.cadastroForm.get('emailOrganizador')?.setErrors({ emailJaExiste: true });  // corrigido para 'emailOrganizador'
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
          console.log(formData);
        },
        erro => {
          console.log('Erro ao cadastrar', erro);
          
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
  
}
