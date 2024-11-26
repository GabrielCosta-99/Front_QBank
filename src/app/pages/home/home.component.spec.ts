import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router'; // Necessário para testar o roteamento

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ RouterModule ] // Importando o RouterModule para os testes
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu visibility when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.menu-button');
    button.click(); // Simula o clique no botão
    fixture.detectChanges(); // Atualiza a visualização

    expect(component.menuOpen).toBeTrue(); // Verifica se o menu foi aberto

    button.click(); // Simula outro clique no botão
    fixture.detectChanges(); // Atualiza a visualização

    expect(component.menuOpen).toBeFalse(); // Verifica se o menu foi fechado
  });
});
