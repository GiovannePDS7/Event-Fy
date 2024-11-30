import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with the sidebar closed', () => {
    // Certifique-se de que o menu lateral está fechado ao iniciar
    expect(component.isSidebarActive).toBeFalse();
  });

  it('should open sidebar when toggleSidebar is called', () => {
    // Chamar toggleSidebar para abrir o menu
    component.toggleSidebar();
    expect(component.isSidebarActive).toBeTrue();
  });

  it('should close sidebar when toggleSidebar is called again', () => {
    // Abrir o menu primeiro
    component.toggleSidebar();
    expect(component.isSidebarActive).toBeTrue();

    // Fechar o menu chamando toggleSidebar novamente
    component.toggleSidebar();
    expect(component.isSidebarActive).toBeFalse();
  });

  it('should close sidebar when closeSidebar is called', () => {
    // Forçar o estado ativo do menu
    component.isSidebarActive = true;
    expect(component.isSidebarActive).toBeTrue();

    // Chamar closeSidebar para fechar o menu
    component.closeSidebar();
    expect(component.isSidebarActive).toBeFalse();
  });

  it('should only open sidebar when clicking the icon', () => {
    // Simular o clique no ícone chamando toggleSidebar
    component.toggleSidebar();
    expect(component.isSidebarActive).toBeTrue();

    // Chamar closeSidebar e verificar que o menu fecha
    component.closeSidebar();
    expect(component.isSidebarActive).toBeFalse();
  });
  it('should close sidebar when X button is clicked', () => {
    // Simula que o menu está aberto
    component.isSidebarActive = true;
    expect(component.isSidebarActive).toBeTrue();
  
    // Simula o clique no botão "X" (chamando toggleSidebar)
    component.toggleSidebar();
    expect(component.isSidebarActive).toBeFalse();
  });
});
