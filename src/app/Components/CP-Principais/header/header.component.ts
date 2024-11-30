import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nomeUsuario: string = '';

  ngOnInit(): void {
    const nomeCompleto = localStorage.getItem('nomeOrganizador') || 'Usuário não identificado';
    const nomes = nomeCompleto.split(' ');
    this.nomeUsuario = nomes.slice(0, 2).join(' '); 
  }
  isSidebarActive = false;

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  closeSidebar(): void {
    this.isSidebarActive = false;
  }
}