import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEdiComponent } from './proyecto-edi.component';

describe('ProyectoEdiComponent', () => {
  let component: ProyectoEdiComponent;
  let fixture: ComponentFixture<ProyectoEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoEdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
