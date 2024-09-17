import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'experience', component: ExperienceComponent },
  {path: 'skills', component: SkillsComponent },
  {path: 'contact', component: ContactmeComponent },
  {path: '', redirectTo: '/about', pathMatch:'full'},
  {path: '**', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
