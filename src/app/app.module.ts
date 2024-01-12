import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/pages/main-page/introduction/introduction.component';
import { SamplesComponent } from './components/pages/main-page/samples/samples.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/pages/main-page/main-content/main-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ProjectXComponent } from './components/pages/project-page/project-x/project-x.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    SamplesComponent,
    FooterComponent,
    MainContentComponent,
    MainPageComponent,
    ProjectXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
