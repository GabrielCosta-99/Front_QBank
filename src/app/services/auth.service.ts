import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interface para dados de login
export interface User {
  username: string;
  password: string;
}

// Interface para dados de cadastro
export interface UserData {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Definindo a URL da API para o cadastro de usuário
  private cadastroUsuarioUrl = 'https://qbankapi1-axb8gnbvb6cjdqg9.brazilsouth-01.azurewebsites.net/api/cadastrousuario';
  private loginUrl = 'http://qbankapi1-axb8gnbvb6cjdqg9.brazilsouth-01.azurewebsites.net/api/login';

  constructor(private http: HttpClient) {}

  // Método de login
  login(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user).pipe(
      catchError((error) => {
        console.error('Erro no login:', error);
        return throwError('Erro ao fazer login, tente novamente!');
      })
    );
  }

  // Método de cadastro de usuário
  cadastrarUsuario(userData: UserData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const authHeaders = headers.set(
      'Authorization',
      'Basic ' + btoa('admin:adminpassword') // Autenticação Básica
    );

    return this.http.post(this.cadastroUsuarioUrl, userData, { headers: authHeaders }).pipe(
      catchError((error) => {
        console.error('Erro no cadastro de usuário:', error);
        return throwError('Erro ao cadastrar usuário, tente novamente!');
      })
    );
  }

  // Verificar se o usuário está autenticado (usando token JWT)
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null; // Retorna true se o token estiver no localStorage
  }

  // Armazenar o token
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para fazer o logout
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
