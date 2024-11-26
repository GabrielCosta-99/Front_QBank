import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
}

export interface UserData {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root', // Globalmente disponível
})
export class AuthService {
  private apiUrl = 'http://localhost:5049/api/cadastrousuario'; // URL da API de cadastro

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    const loginUrl = 'http://localhost:5049/api/login'; // Substitua pelo endpoint correto

    return this.http.post<any>(loginUrl, user).pipe(
      catchError(error => {
        console.error('Erro no login:', error);
        return throwError('Erro ao fazer login, tente novamente!');
      })
    );
  }

  cadastrarUsuario(userData: UserData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const authHeaders = headers.set(
      'Authorization',
      'Basic ' + btoa('admin:adminpassword') // Autenticação Básica
    );

    return this.http.post(this.apiUrl, userData, { headers: authHeaders }).pipe(
      catchError(error => {
        console.error('Erro no cadastro de usuário:', error);
        return throwError('Erro ao cadastrar usuário, tente novamente!');
      })
    );
  }

  // Verificar se o usuário está autenticado (por exemplo, baseado em um token JWT)
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null; // Retorna true se o token estiver no localStorage
  }

  // Método para armazenar o token
  storeToken(token: string): void {
    localStorage.setItem('authToken', token); // Armazenando o token no localStorage
  }

  // Método para fazer o logout
  logout(): void {
    localStorage.removeItem('authToken'); // Remove o token do localStorage
  }
}
