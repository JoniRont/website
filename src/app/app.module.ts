import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/pages/main-page/introduction/introduction.component';
import { SkillsAWSComponent } from './components/pages/skills-page/skill-cards/skills-aws/skills-aws.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/pages/main-page/main-content/main-content.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ProjectXComponent } from './components/pages/project-page/project-x/project-x.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';
import { SkillsFlutterComponent } from './components/pages/skills-page/skill-cards/skills-flutter/skills-flutter.component';
import { SkillsAngularComponent } from './components/pages/skills-page/skill-cards/skills-angular/skills-angular.component';
import { SkillsServerlessComponent } from './components/pages/skills-page/skill-cards/skills-serverless/skills-serverless.component';
import { SkillsMoreToComeComponent } from './components/pages/skills-page/skill-cards/skills-more-to-come/skills-more-to-come.component';
import { DrawerComponent } from './components/global-components/drawer/drawer.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ProjectMobileAppComponent } from './components/pages/project-page/project-x/project-mobile-app/project-mobile-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    SkillsAWSComponent,
    FooterComponent,
    MainContentComponent,
    MainPageComponent,
    ProjectXComponent,
    SkillsPageComponent,
    SkillsFlutterComponent,
    SkillsAngularComponent,
    SkillsServerlessComponent,
    SkillsMoreToComeComponent,
    DrawerComponent,
    PrivacyPolicyComponent,
    ProjectMobileAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
