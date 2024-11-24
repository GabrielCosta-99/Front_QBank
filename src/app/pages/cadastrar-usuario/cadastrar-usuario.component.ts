import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionar os módulos necessários
  template: `
    <div class="form-container">
      <h2>Cadastrar Usuário</h2>
      <form (ngSubmit)="cadastrarUsuario()">
        <div>
          <label for="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            [(ngModel)]="usuario.Nome"
            name="nome"
            required
          />
        </div>
        <div>
          <label for="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            [(ngModel)]="usuario.CPF"
            name="cpf"
            required
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="usuario.Email"
            name="email"
            required
          />
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            [(ngModel)]="usuario.Senha"
            name="senha"
            required
          />
        </div>
        <div>
          <label for="tipoConta">Tipo de Conta:</label>
          <select id="tipoConta" [(ngModel)]="usuario.TipoConta" name="tipoConta" required>
            <option value="Corrente">Corrente</option>
            <option value="Poupança">Poupança</option>
          </select>
        </div>
        <div class="buttons">
          <button type="submit" class="save-button">Salvar</button>
          <button type="button" class="menu-button" (click)="voltarAoMenu()">Voltar ao Menu</button>
        </div>
      </form>
      <p *ngIf="mensagemSucesso" class="success-message">{{ mensagemSucesso }}</p>
      <p *ngIf="mensagemErro" class="error-message">{{ mensagemErro }}</p>
    </div>
  `,
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent {
  usuario = {
    Nome: '',
    CPF: '',
    Email: '',
    Senha: '',
    TipoConta: 'Corrente',
  };
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  cadastrarUsuario() {
    const apiUrl = 'http://localhost:5049/api/cadastrousuario'; // URL da API

    this.http.post(apiUrl, this.usuario).subscribe({
      next: (res: any) => {
        if (res.message) {
          this.mensagemSucesso = res.message; // Caso a API retorne uma mensagem personalizada
        } else {
          this.mensagemSucesso = 'Usuário cadastrado com sucesso!';
        }
        this.mensagemErro = null;
      },
      error: (err) => {
        if (err.error && err.error.message) {
          this.mensagemErro = err.error.message; // Mensagem personalizada da API
        } else {
          this.mensagemErro = 'Erro ao cadastrar usuário. Tente novamente.';
        }
        this.mensagemSucesso = null;
      },
    });
  }

  voltarAoMenu() {
    this.router.navigate(['/']);
  }
}
