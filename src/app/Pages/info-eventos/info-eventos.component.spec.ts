import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventosComponent } from './info-eventos.component';

describe('InfoEventosComponent', () => {
  let component: InfoEventosComponent;
  let fixture: ComponentFixture<InfoEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoEventosComponent]
    });
    fixture = TestBed.createComponent(InfoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
