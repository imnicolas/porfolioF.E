import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioEdiComponent } from './estudio-edi.component';

describe('EstudioEdiComponent', () => {
  let component: EstudioEdiComponent;
  let fixture: ComponentFixture<EstudioEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioEdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
