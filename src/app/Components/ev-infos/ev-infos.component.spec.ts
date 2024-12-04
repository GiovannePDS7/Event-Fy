import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvInfosComponent } from './ev-infos.component';

describe('EvInfosComponent', () => {
  let component: EvInfosComponent;
  let fixture: ComponentFixture<EvInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvInfosComponent]
    });
    fixture = TestBed.createComponent(EvInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
