import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){

  }
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

  SairConta(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    } else {
      console.log('Nenhum token encontrado no localStorage.');
      this.router.navigate(['/login'])
    }
  }
}