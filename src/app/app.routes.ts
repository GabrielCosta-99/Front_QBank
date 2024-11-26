import { Routes } from '@angular/router';

// Importação dos componentes
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


// Importa o AuthGuard
import { AuthGuard } from './services/auth.guard'; 

export const routes: Routes = [
  // A Home pode ser acessada sem autenticação
  { path: '', component: HomeComponent },  // Redireciona para home se a URL estiver vazia
  
  // Página de Login
  { path: 'login', component: LoginComponent },  

  // Redireciona para a página de login caso o usuário não esteja autenticado
  { path: '**', redirectTo: '/login' }
];
