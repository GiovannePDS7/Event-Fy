import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalApresentacaoComponent } from './principal-apresentacao.component';

describe('PrincipalApresentacaoComponent', () => {
  let component: PrincipalApresentacaoComponent;
  let fixture: ComponentFixture<PrincipalApresentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalApresentacaoComponent]
    });
    fixture = TestBed.createComponent(PrincipalApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
