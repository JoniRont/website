import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMoreToComeComponent } from './skills-more-to-come.component';

describe('SkillsMoreToComeComponent', () => {
  let component: SkillsMoreToComeComponent;
  let fixture: ComponentFixture<SkillsMoreToComeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsMoreToComeComponent]
    });
    fixture = TestBed.createComponent(SkillsMoreToComeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
