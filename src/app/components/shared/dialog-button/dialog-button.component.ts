import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserListComponent } from '../../user-list/user-list.component';

@Component({
  selector: 'app-dialog-button',
  templateUrl: './dialog-button.component.html',
  styleUrls: ['./dialog-button.component.css']
})
export class DialogButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() dialogContent: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log(this.dialogContent);
    let dialogRef;
    switch (this.dialogContent) {
      case ('UserListComponent'):
        dialogRef = this.dialog.open(UserListComponent);
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


