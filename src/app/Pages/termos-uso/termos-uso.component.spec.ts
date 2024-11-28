import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosUsoComponent } from './termos-uso.component';

describe('TermosUsoComponent', () => {
  let component: TermosUsoComponent;
  let fixture: ComponentFixture<TermosUsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermosUsoComponent]
    });
    fixture = TestBed.createComponent(TermosUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
