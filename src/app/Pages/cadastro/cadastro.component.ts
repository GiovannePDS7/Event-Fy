import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

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

  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }
  visibilidadeConfirmSenha(): void {
    this.typeConfirmSenha = this.typeConfirmSenha === 'password' ? 'text' : 'password';
  }

  constructor(private formBuilder: FormBuilder) { }

  cadastroForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    email: this.formBuilder.control('', [Validators.email, Validators.required, Validators.maxLength(50)]),
    senha: this.formBuilder.control('', [Validators.required,Validators.pattern('^(?!.*\\s).*$'), Validators.minLength(8), Validators.maxLength(50)]),
    confirmarSenha:  this.formBuilder.control('', [Validators.required])
  });
  
  onEnviar() {
  this.cadastroForm.markAllAsTouched();

  if (this.cadastroForm.valid) {
    console.table(this.cadastroForm.value);
    
  } else {
    console.log('Formulário inválido');
  }
  }
}
