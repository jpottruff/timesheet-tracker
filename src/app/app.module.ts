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
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { GroupComponent } from './pages/group/group.component';
import { EditGroupNameDialogComponent } from './components/dialogs/edit-group-name-dialog/edit-group-name-dialog.component';
import { EditGroupAdminsDialogComponent } from './components/dialogs/edit-group-admins-dialog/edit-group-admins-dialog.component';
import { AddApproversDialogComponent } from './components/dialogs/add-approvers-dialog/add-approvers-dialog.component';
import { EditButtonComponent } from './components/shared/edit-button/edit-button.component';
import { UserExpansionPanelComponent } from './components/users/user-expansion-panel/user-expansion-panel.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { CopyButtonComponent } from './components/shared/copy-button/copy-button.component';
import { CreateUserDialogComponent } from './components/dialogs/create-user-dialog/create-user-dialog.component';
import { TimesheetTableComponent } from './components/timesheet/timesheet-table/timesheet-table.component';


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
    UsersComponent,
    GroupComponent,
    EditGroupNameDialogComponent,
    EditGroupAdminsDialogComponent,
    AddApproversDialogComponent,
    EditButtonComponent,
    UserExpansionPanelComponent,
    UserProfileComponent,
    CopyButtonComponent,
    CreateUserDialogComponent,
    TimesheetTableComponent,
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