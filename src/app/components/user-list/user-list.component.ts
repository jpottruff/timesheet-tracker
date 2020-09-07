import { Component, OnInit } from '@angular/core';
import { USERS } from '../../../../mock-data/user-mock.data'
import { User } from 'src/app/classes/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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
