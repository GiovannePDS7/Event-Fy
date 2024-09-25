import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadesInicialComponent } from './funcionalidades-inicial.component';

describe('FuncionalidadesInicialComponent', () => {
  let component: FuncionalidadesInicialComponent;
  let fixture: ComponentFixture<FuncionalidadesInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionalidadesInicialComponent]
    });
    fixture = TestBed.createComponent(FuncionalidadesInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
