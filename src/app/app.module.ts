import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ReviewComponent } from './pages/review/review.component';
import { ApproversComponent } from './pages/approvers/approvers.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogoutButtonComponent } from './components/shared/logout-button/logout-button.component';
import { TitleComponent } from './components/shared/title/title.component';
import { ProjectTableComponent } from './components/projects/project-table/project-table.component';
import { TimesheetDateComponent } from './components/timesheet/timesheet-date/timesheet-date.component';
import { ApproverExpansionPanelComponent } from './components/approvers/approver-expansion-panel/approver-expansion-panel.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './modules/app-material.module';
import { ThemeSelectorComponent } from './components/shared/theme-selector/theme-selector.component';
import { ApproveeListComponent } from './components/approvers/approvee-list/approvee-list.component';
import { DialogButtonComponent } from './components/shared/dialog-button/dialog-button.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';


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
    ApproverExpansionPanelComponent,
    AdminComponent,
    ThemeSelectorComponent,
    ApproveeListComponent,
    DialogButtonComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppMaterialModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    // MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }