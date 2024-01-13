import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFlutterComponent } from './skills-flutter.component';

describe('SkillsFlutterComponent', () => {
  let component: SkillsFlutterComponent;
  let fixture: ComponentFixture<SkillsFlutterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsFlutterComponent]
    });
    fixture = TestBed.createComponent(SkillsFlutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
