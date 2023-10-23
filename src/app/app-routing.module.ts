import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './Components/cv/cv.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  {
    path: 'Components',
    children: [
      { path: 'Projects', component: ProjectsComponent },
      { path: 'Cv', component: CvComponent },
    ],
  },
  // Add a default route (can be an empty component)
  { path: 'default', component: CvComponent },
  { path: '**', redirectTo: 'default' }, // Handle any other invalid routes by redirecting to 'default'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
