import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoExistenteComponent } from './evento-existente.component';

describe('EventoExistenteComponent', () => {
  let component: EventoExistenteComponent;
  let fixture: ComponentFixture<EventoExistenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoExistenteComponent]
    });
    fixture = TestBed.createComponent(EventoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
