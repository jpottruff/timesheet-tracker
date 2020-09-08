import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddApproversDialogComponent } from '../../dialogs/add-approvers-dialog/add-approvers-dialog.component'
import { EditGroupAdminsDialogComponent } from '../../dialogs/edit-group-admins-dialog/edit-group-admins-dialog.component'
import { CreateUserDialogComponent } from '../../dialogs/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.css']
})
export class DialogButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() dialogContent: string;
  @Input() tooltipMsg: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log(this.dialogContent);
    let dialogRef;
    switch (this.dialogContent) {
      case ('AddApproversDialogComponent'):
        dialogRef = this.dialog.open(AddApproversDialogComponent);
        break;      
      case ('EditGroupAdminsDialogComponent'):
        dialogRef = this.dialog.open(EditGroupAdminsDialogComponent);
        break;
      case ('CreateUserDialogComponent'):
        dialogRef = this.dialog.open(CreateUserDialogComponent);
        break;
      default:
        console.log('<<not sure>>')
        return;
    }
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


