import { Routes } from '@angular/router';

// Importação dos componentes
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
  // Rota para o Login
  { path: 'login', component: LoginComponent },

  // Rota para a Home
  { path: 'home', component: HomeComponent },

  // Rota para a página de Clients
  { path: 'clients', component: ClientsComponent },

  // Redireciona para a rota 'login' caso a URL seja acessada com um caminho vazio
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Rota curinga para redirecionar em caso de URL inválida
  { path: '**', redirectTo: '/login' }
];
