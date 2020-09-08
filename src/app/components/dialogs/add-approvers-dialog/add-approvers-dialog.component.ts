import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { USERS } from '../../../../../mock-data/user-mock.data'


@Component({
  selector: 'app-add-approvers-dialog',
  templateUrl: './add-approvers-dialog.component.html',
  styleUrls: ['./add-approvers-dialog.component.css']
})
export class AddApproversDialogComponent implements OnInit {

  users: User[];
  selectedUsers; 
  
  constructor() { }

  ngOnInit(): void {
    this.users = USERS;
  }
  

  addApprovers() {
    console.log('ADDING to DB: ', this.selectedUsers);
  }

}
