import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadaComponent } from './nada.component';

describe('NadaComponent', () => {
  let component: NadaComponent;
  let fixture: ComponentFixture<NadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
