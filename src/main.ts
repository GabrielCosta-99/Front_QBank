import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router'; // Removendo a configuração desnecessária
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ClientsComponent } from './app/pages/clients/clients.component';
import { CadastrarUsuarioComponent } from './app/pages/cadastrar-usuario/cadastrar-usuario.component';
import { AuthGuard } from './app/services/auth.guard'; // Importando o AuthGuard
import { AuthService } from './app/services/auth.service'; // Importando o AuthService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definindo as rotas
const routes = [
  { path: '', component: HomeComponent },  // Home acessível a todos
  { path: 'login', component: LoginComponent },  // Página de login
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },  // Clients protegida
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent, canActivate: [AuthGuard] },  // Cadastrar usuário protegido
  { path: '**', redirectTo: '/login' }  // Rota curinga redireciona para login
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Define as rotas
    provideHttpClient(),  // Fornece o HttpClient para o app
    importProvidersFrom(CommonModule, FormsModule), // Importa o CommonModule e FormsModule
    AuthService, // Fornece o serviço de autenticação
    AuthGuard,   // Fornece o guard de autenticação
  ],
});
