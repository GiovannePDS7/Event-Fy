import { Component, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

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
}
