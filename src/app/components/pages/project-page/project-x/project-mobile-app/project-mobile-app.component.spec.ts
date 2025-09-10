import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMobileAppComponent } from './project-mobile-app.component';

describe('ProjectMobileAppComponent', () => {
    let component: ProjectMobileAppComponent;
    let fixture: ComponentFixture<ProjectMobileAppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProjectMobileAppComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectMobileAppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
