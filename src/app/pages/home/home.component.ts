import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="container">
    <header>
      <button (click)="toggleMenu()" class="menu-button">☰ Menu</button>
      <h1>GPA</h1>
      <h2>Group Finance,</h2>
      <h3>um banco feito para você.</h3>
    </header>

    <!-- Menu Lateral -->
    <aside *ngIf="menuOpen" class="menu">
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/clients">Clientes</a></li>
          <li><a routerLink="/cadastrar-usuario">Cadastrar Usuário</a></li>
        </ul>
      </nav>
    </aside>

    <main>
      <form (ngSubmit)="cadastrarUsuario()">
        <label for="username">Usuário:</label>
        <input id="username" type="text" [(ngModel)]="userData.username" name="username" required />

        <label for="email">Email:</label>
        <input id="email" type="email" [(ngModel)]="userData.email" name="email" required />

        <label for="password">Senha:</label>
        <input id="password" type="password" [(ngModel)]="userData.password" name="password" required />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  </div>
`,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
})
export class HomeComponent {
  menuOpen = false;

  userData: any = {
    username: '',
    password: '',
    email: '',
  };

  constructor(private authService: AuthService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  cadastrarUsuario() {
    this.authService.cadastrarUsuario(this.userData).subscribe(
      (response) => {
        console.log('Usuário cadastrado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }
}
