import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { LoginComponent } from './pages/login/login.component';
import { ApproversComponent } from './pages/approvers/approvers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReviewComponent } from './pages/review/review.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // Routes
  {path: 'timesheet', component: TimesheetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'approvers', component: ApproversComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'review', component: ReviewComponent},

  // Redirects
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  
  // Wild Card
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
