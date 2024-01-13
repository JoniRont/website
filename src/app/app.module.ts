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
import { SkillsFlutterComponent } from './components/pages/skills-page/skill-cards/skills-flutter/skills-flutter.component'


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
    SkillsFlutterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
