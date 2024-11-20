import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    
    if (token) {
      return true; // O usuário está autenticado
    } else {
      this.router.navigate(['/login']); // Redireciona para o login
      return false; // O usuário não está autenticado
    }
  }
}
