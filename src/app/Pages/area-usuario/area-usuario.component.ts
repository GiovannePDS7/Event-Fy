import { Component } from '@angular/core';

@Component({
  selector: 'app-area-usuario',
  templateUrl: './area-usuario.component.html',
  styleUrls: ['./area-usuario.component.css']
})
export class AreaUsuarioComponent {
  nomeOrganizador: string = '';
  emailOrganizador: string = '';
  contatoOrganizador: string = '';
  fotoOrganizador: string = '';
  dataNascimento: string = '';

  ngOnInit(): void {
    // Recuperar dados do localStorage
    this.nomeOrganizador = localStorage.getItem('nomeOrganizador') || 'Usuário não identificado';
    this.emailOrganizador = localStorage.getItem('emailOrganizador') || 'Email não encontrado';
    this.contatoOrganizador = localStorage.getItem('contatoOrganizador') || 'Contato não informado';
    this.fotoOrganizador = localStorage.getItem('fotoOrganizador') || '../../../../assets/Elementos/IconFormulario.png';
    this.dataNascimento = ''; // Adicione a data de nascimento, se disponível no localStorage
  }
}
