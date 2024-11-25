import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5049/api/cadastrousuario'; // URL da  API

  constructor(private http: HttpClient) {}

  cadastrarUsuario(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const authHeaders = headers.set(
      'Authorization',
      'Basic ' + btoa('admin:adminpassword') // Autenticação Básica
    );

    return this.http.post(this.apiUrl, userData, { headers: authHeaders });
  }
}
