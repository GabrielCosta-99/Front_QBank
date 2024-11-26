import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importando o AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;  // Permite acesso se o usuário estiver autenticado
    } else {
      this.router.navigate(['/login']);  // Redireciona para o login se não autenticado
      return false;
    }
  }
}
