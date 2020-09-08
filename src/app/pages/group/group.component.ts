import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { USERS } from '../../../../mock-data/user-mock.data'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  adminUsers: User[] = [];
  
  constructor() { }

  ngOnInit(): void {

    // Will be a query that just gets admin users
    this.adminUsers.push(USERS[0]);
    this.adminUsers.push(USERS[2]);
  }

}
