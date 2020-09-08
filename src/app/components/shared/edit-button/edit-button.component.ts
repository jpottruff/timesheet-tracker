import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditGroupNameDialogComponent } from '../../dialogs/edit-group-name-dialog/edit-group-name-dialog.component';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  @Input() dialogContent: string

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log(this.dialogContent);
    let dialogRef;
    switch (this.dialogContent) {
      case ('EditGroupNameComponent'):
        dialogRef = this.dialog.open(EditGroupNameDialogComponent);
        break;
      default:
        console.log('<<not sure>>')
        break;
    }
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
