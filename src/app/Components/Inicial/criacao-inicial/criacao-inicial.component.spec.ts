import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoInicialComponent } from './criacao-inicial.component';

describe('CriacaoInicialComponent', () => {
  let component: CriacaoInicialComponent;
  let fixture: ComponentFixture<CriacaoInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriacaoInicialComponent]
    });
    fixture = TestBed.createComponent(CriacaoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
