import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { HttpClientModule } from '@angular/common/http'; // Para fazer requisições HTTP nos testes
import { RouterTestingModule } from '@angular/router/testing'; // Para testar navegação de rotas

describe('CadastrarUsuarioComponent', () => {
  let component: CadastrarUsuarioComponent;
  let fixture: ComponentFixture<CadastrarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CadastrarUsuarioComponent,  // Componente standalone diretamente
        HttpClientModule,  // Necessário para testar requisições HTTP
        RouterTestingModule // Se você precisar testar navegação de rotas
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testes adicionais podem ser adicionados aqui
});
