import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { USERS } from '../../../../mock-data/user-mock.data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor() { }

  ngOnInit(): void {
    this.users = USERS;
  }

}
