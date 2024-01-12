import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectXComponent } from './project-x.component';

describe('ProjectXComponent', () => {
  let component: ProjectXComponent;
  let fixture: ComponentFixture<ProjectXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectXComponent]
    });
    fixture = TestBed.createComponent(ProjectXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
