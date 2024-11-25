import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule no componente standalone

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // Adicionando HttpClientModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ username: this.user, password: this.password }).subscribe(
      (response) => this.router.navigate(['/clients']),
      error => console.error('Erro ao logar:', error)
    );
  }
}
