import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent], // Declara o componente standalone
      imports: [CommonModule], // Importa CommonModule para usar *ngIf
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta mudanças após a inicialização
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado corretamente
  });

  it('should toggle menu visibility when toggleMenu is called', () => {
    component.menuOpen = false; // Garante o estado inicial do menu fechado
    component.toggleMenu(); // Chama o método para abrir o menu
    fixture.detectChanges(); // Detecta mudanças na visualização
    expect(component.menuOpen).toBeTrue(); // Verifica se o menu foi aberto

    component.toggleMenu(); // Chama o método para fechar o menu
    fixture.detectChanges(); // Detecta mudanças novamente
    expect(component.menuOpen).toBeFalse(); // Verifica se o menu foi fechado
  });
});
