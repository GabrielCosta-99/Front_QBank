import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router'; // Para configurar as rotas
import { provideHttpClient } from '@angular/common/http'; // Para fornecer HttpClient
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { CadastrarUsuarioComponent } from './app/pages/cadastrar-usuario/cadastrar-usuario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definindo as rotas
const routes = [
  { path: '', component: HomeComponent },  // Home acessível a todos
  { path: 'login', component: LoginComponent },  // Página de login
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },  // Cadastrar usuário sem guard
  { path: '**', redirectTo: '/login' }  // Rota curinga redireciona para login
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Define as rotas
    provideHttpClient(),  // Fornece o HttpClient para o app
    importProvidersFrom(CommonModule, FormsModule), // Importa o CommonModule e FormsModule
  ],
});
