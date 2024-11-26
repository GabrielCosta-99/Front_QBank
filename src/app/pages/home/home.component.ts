import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
          <li><a routerLink="/login">Login</a></li>
        </ul>
      </nav>
    </aside>
  </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
