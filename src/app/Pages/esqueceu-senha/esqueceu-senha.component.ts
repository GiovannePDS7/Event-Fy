import { Component } from '@angular/core';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent {
  email: string = '';

  onSubmit() {
    if (this.email) {
      // Implemente a lógica de envio aqui, como chamar um serviço
      console.log('E-mail enviado para:', this.email);
    } else {
      console.log('Por favor, insira um e-mail válido.');
    }
  }
}
