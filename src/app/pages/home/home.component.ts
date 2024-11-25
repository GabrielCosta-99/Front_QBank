import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      <p></p>
    </main>
  </div>
`,

  styleUrls: ['./home.component.css'],
  imports: [CommonModule],
})
export class HomeComponent {
  menuOpen = false;
  constructor(private authService: AuthService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  // Função para cadastrar o usuário com os dados fornecidos no formulário
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
  

