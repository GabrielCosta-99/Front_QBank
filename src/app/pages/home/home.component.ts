import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <header>
        <button (click)="toggleMenu()" class="menu-button">☰ Menu</button>
        <h1>GPA Group Finance</h1>
      </header>

      <aside *ngIf="menuOpen" class="menu">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </aside>

      <main>
        <p>Welcome to GPA Group Finance! Choose an option from the menu.</p>
      </main>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
