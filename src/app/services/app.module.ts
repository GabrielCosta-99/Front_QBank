import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Necessário para fazer requisições HTTP
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import necessário para usar HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
