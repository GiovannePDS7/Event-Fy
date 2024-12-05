import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroComponentsComponent } from './financeiro-components.component';

describe('FinanceiroComponentsComponent', () => {
  let component: FinanceiroComponentsComponent;
  let fixture: ComponentFixture<FinanceiroComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceiroComponentsComponent]
    });
    fixture = TestBed.createComponent(FinanceiroComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
