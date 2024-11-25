import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Necessário para fazer requisições HTTP
import { FormsModule } from '@angular/forms'; // Necessário para trabalhar com formulários
import { AppComponent } from './app.component';

// Se você tem um serviço AuthService
import { AuthService } from './services/auth.service'; // Ajuste o caminho conforme necessário
import { HomeComponent } from './pages/home/home.component'; // Importação do seu componente

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Certifique-se de declarar todos os componentes necessários aqui
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Para fazer requisições HTTP
    FormsModule, // Para usar formulários no Angular
  ],
  providers: [AuthService], // Registre seu AuthService aqui
  bootstrap: [AppComponent],
})
export class AppModule {}
