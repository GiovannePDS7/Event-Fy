import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroComponent {
  typeInput: string = 'password';
  typeInputConfirm: string = 'password';

  visibilidadeSenha(): void {
    this.typeInput = this.typeInput === 'password' ? 'text' : 'password';
  }
  visibilidadeConfirmSenha(): void {
    this.typeInputConfirm = this.typeInputConfirm === 'password' ? 'text' : 'password';
  }
}
