import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ReviewComponent } from './pages/review/review.component';
import { ApproversComponent } from './pages/approvers/approvers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { TitleComponent } from './components/title/title.component';
import { ProjectTableComponent } from './components/projects/project-table/project-table.component';
import { TimesheetDateComponent } from './components/timesheet/timesheet-date/timesheet-date.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimesheetComponent,
    ReviewComponent,
    ApproversComponent,
    ProjectsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LogoutButtonComponent,
    TitleComponent,
    ProjectTableComponent,
    TimesheetDateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule
  ],
  providers: [
    // MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }