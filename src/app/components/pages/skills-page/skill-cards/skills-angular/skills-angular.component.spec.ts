import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAngularComponent } from './skills-angular.component';

describe('SkillsAngularComponent', () => {
  let component: SkillsAngularComponent;
  let fixture: ComponentFixture<SkillsAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsAngularComponent]
    });
    fixture = TestBed.createComponent(SkillsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
