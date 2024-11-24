import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.error('Erro ao carregar clientes:', error)
    );
  }

  updateClient(client: any) {
    console.log('Atualizando cliente:', client);
    // Adicione lógica para chamar o serviço de atualização, por exemplo:
    this.clientService.updateClient(client).subscribe(
      response => console.log('Cliente atualizado com sucesso:', response),
      error => console.error('Erro ao atualizar cliente:', error)
    );
  }

  deleteClient(clientId: number) {
    console.log('Excluindo cliente com ID:', clientId);
    // Adicione lógica para chamar o serviço de exclusão:
    this.clientService.deleteClient(clientId).subscribe(
      response => {
        console.log('Cliente excluído com sucesso:', response);
        // Atualize a lista de clientes após a exclusão
        this.clients = this.clients.filter(client => client.id !== clientId);
      },
      error => console.error('Erro ao excluir cliente:', error)
    );
  }
}
