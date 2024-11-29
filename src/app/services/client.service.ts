import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://qbankapi1-axb8gnbvb6cjdqg9.brazilsouth-01.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`);
  }

  addClient(client: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, client);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/${client.id}`, client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${clientId}`);
  }
}