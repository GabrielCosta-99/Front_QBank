import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para usar *ngIf
import { RouterModule } from '@angular/router'; // Necessário para usar routerLink

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa CommonModule e RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuOpen = false; // Controla o estado de visibilidade do menu

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna entre abrir/fechar o menu
  }
}
