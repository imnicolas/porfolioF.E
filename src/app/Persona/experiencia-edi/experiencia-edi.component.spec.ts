import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEdiComponent } from './experiencia-edi.component';

describe('ExperienciaEdiComponent', () => {
  let component: ExperienciaEdiComponent;
  let fixture: ComponentFixture<ExperienciaEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
