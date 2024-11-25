import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Adicione essa linha
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule], // Adicionando FormsModule
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}