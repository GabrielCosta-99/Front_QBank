import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { MenuComponent } from '../../components/menu/menu.component'; // Importando o MenuComponent

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MenuComponent], // Adicionando o MenuComponent aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = ''; // Armazena o nome de usuário
  password = ''; // Armazena a senha
  errorMessage = ''; // Para armazenar e exibir mensagens de erro
  loading = false; // Para exibir uma animação de carregamento enquanto o login está em andamento
  menuOpen = false; // Controle da visibilidade do menu lateral

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.user && this.password) { // Verifica se os campos não estão vazios
      this.loading = true; // Ativa a animação de carregamento
      this.authService.login({ username: this.user, password: this.password }).subscribe(
        (response) => {
          // Armazenar o token após o login bem-sucedido
          this.authService.storeToken(response.token); // Armazena o token recebido da resposta
          this.loading = false; // Desativa a animação de carregamento
          this.router.navigate(['/clients']); // Redireciona para a página de clientes após o login bem-sucedido
        },
        (error) => {
          this.loading = false; // Desativa a animação de carregamento
          this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais e tente novamente.'; // Exibe uma mensagem de erro
          console.error('Erro ao logar:', error);
        }
      );
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos.'; // Exibe erro caso os campos estejam vazios
    }
  }

  // Limpa a mensagem de erro quando o usuário começar a digitar
  onInput() {
    this.errorMessage = '';
  }

  // Método para alternar o estado do menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  voltarAoMenu() {
    this.router.navigate(['/']);
  }
}
