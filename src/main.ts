import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';  // Para configurar as rotas
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { CadastrarUsuarioComponent } from './app/pages/cadastrar-usuario/cadastrar-usuario.component';
import { CommonModule } from '@angular/common'; // Importa o CommonModule para uso de diretivas como *ngIf
import { FormsModule } from '@angular/forms';  // Importa o FormsModule para formulários
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule
//import { AuthService } from './services/auth.service';  // Importe o seu serviço AuthService

// Definindo as rotas
const routes = [
  { path: '', component: HomeComponent },  // Home acessível a todos
  { path: 'login', component: LoginComponent },  // Página de login
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },  // Cadastrar usuário
  { path: '**', redirectTo: '/login' }  // Rota curinga, redireciona para login
];

// Inicializando a aplicação com os módulos e componentes necessários
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Configura as rotas
    importProvidersFrom(
      CommonModule,          // Para diretivas comuns como *ngIf, *ngFor
      FormsModule,           // Para usar formulários
      HttpClientModule       // Adiciona o HttpClientModule para permitir requisições HTTP
    ),
  ],
});
