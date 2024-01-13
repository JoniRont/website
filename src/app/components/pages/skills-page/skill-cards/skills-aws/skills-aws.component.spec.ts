import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAWSComponent } from './skills-aws.component';

describe('SamplesComponent', () => {
  let component: SkillsAWSComponent;
  let fixture: ComponentFixture<SkillsAWSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsAWSComponent]
    });
    fixture = TestBed.createComponent(SkillsAWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
