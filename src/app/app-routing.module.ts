import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './Components/cv/cv.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'project', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
