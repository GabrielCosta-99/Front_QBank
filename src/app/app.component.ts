import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Importa o RouterOutlet para navegação
  template: `<router-outlet></router-outlet>`, // Define o template do componente
  styles: []
})
export class AppComponent {}
