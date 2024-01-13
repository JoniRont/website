import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsServerlessComponent } from './skills-serverless.component';

describe('SkillsServerlessComponent', () => {
  let component: SkillsServerlessComponent;
  let fixture: ComponentFixture<SkillsServerlessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsServerlessComponent]
    });
    fixture = TestBed.createComponent(SkillsServerlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
