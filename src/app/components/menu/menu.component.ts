import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necessário para usar routerLink
import { CommonModule } from '@angular/common'; // Necessário para *ngIf

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule], // Adiciona CommonModule
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuOpen: boolean = false; // Entrada para controlar a visibilidade
  @Output() menuToggle = new EventEmitter<void>(); // Evento para alternar o estado do menu

  toggleMenu() {
    this.menuToggle.emit(); // Emite o evento para alternar o estado
  }
}
