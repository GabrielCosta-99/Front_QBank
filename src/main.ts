import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ClientsComponent } from './app/pages/clients/clients.component';
import { CadastrarUsuarioComponent } from './app/pages/cadastrar-usuario/cadastrar-usuario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'clients', component: ClientsComponent }, // Página de clientes
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent }, // Página de cadastro de usuário
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configuração das rotas
    provideHttpClient(), // Habilita o HttpClient para chamadas à API
    importProvidersFrom(CommonModule, FormsModule), // Importa CommonModule e FormsModule
  ],
});
