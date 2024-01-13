import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { ProjectXComponent } from './components/pages/project-page/project-x/project-x.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';

const routes: Routes = [
  {
    path: 'project-x',
    component: ProjectXComponent
  },
  {
    path: 'skills',
    component: SkillsPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: '',   redirectTo: '/main', pathMatch: 'full'
  }

  // { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
