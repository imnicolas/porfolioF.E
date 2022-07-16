import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEdiComponent } from './skill-edi.component';

describe('SkillEdiComponent', () => {
  let component: SkillEdiComponent;
  let fixture: ComponentFixture<SkillEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
