import { Routes } from '@angular/router';

// Importação dos componentes
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';  // Adicionado

export const routes: Routes = [
  // A Home pode ser acessada sem autenticação
  { path: '', component: HomeComponent },  // Página inicial

  // Página de Login
  { path: 'login', component: LoginComponent },  

  // Página de Cadastro de Usuário (sem proteção de autenticação)
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },  // Rota sem AuthGuard

  // Redireciona para a página de login caso o usuário não esteja autenticado
  { path: '**', redirectTo: '/login' }
];
