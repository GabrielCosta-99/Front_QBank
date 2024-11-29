import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importando o AuthService
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Cadastrar Usuário</h2>
      <form (ngSubmit)="cadastrarUsuario()" #usuarioForm="ngForm">
        <div>
          <label for="username">Nome:</label>
          <input
            type="text"
            id="username"
            [(ngModel)]="usuario.username"
            name="username"
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
            minlength="11"
            maxlength="11"
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="usuario.email"
            name="email"
            required
          />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="usuario.password"
            name="password"
            required
            minlength="6"
          />
        </div>
        <div>
          <label for="tipoConta">Tipo de Conta:</label>
          <select id="tipoConta" [(ngModel)]="usuario.tipoConta" name="tipoConta" required>
            <option value="Corrente">Corrente</option>
            <option value="Poupança">Poupança</option>
          </select>
        </div>
        <div class="buttons">
          <button type="submit" class="save-button" [disabled]="!usuarioForm.form.valid">Salvar</button>
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
    username: '', // Alterado de 'Nome' para 'username'
    CPF: '',
    email: '',  // Alterado de 'Email' para 'email'
    password: '',  // Alterado de 'Senha' para 'password'
    tipoConta: 'Corrente',  // Adicionado 'tipoConta'
  };
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  cadastrarUsuario() {
    this.authService.cadastrarUsuario(this.usuario).subscribe({
      next: (res: any) => {
        if (res.message) {
          this.mensagemSucesso = res.message; // Caso a API retorne uma mensagem personalizada
        } else {
          this.mensagemSucesso = 'Usuário cadastrado com sucesso!';
        }
        this.mensagemErro = null;
        // Redirecionando para a página de login após cadastro com sucesso
        this.router.navigate(['/login']);
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
