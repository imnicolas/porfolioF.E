import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAddComponent } from './estudio-add.component';

describe('EstudioAddComponent', () => {
  let component: EstudioAddComponent;
  let fixture: ComponentFixture<EstudioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
