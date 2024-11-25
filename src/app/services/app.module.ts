import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Adicione essa linha
import { AppComponent } from './app.component';

@NgModule({
  declarations: [/* Seus componentes */],
  imports: [
    /* Outros módulos */
    HttpClientModule, // Import necessário para usar HttpClient
  ],
  providers: [],
  bootstrap: [/* Componente principal */],
})
export class AppModule {}