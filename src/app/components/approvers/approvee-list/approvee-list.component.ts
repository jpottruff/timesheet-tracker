import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-approvee-list',
  templateUrl: './approvee-list.component.html',
  styleUrls: ['./approvee-list.component.css']
})
export class ApproveeListComponent implements OnInit {

  @Input() approvees: User[];
  selectable = true;
  removable = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  remove(approvee: User): void {
    const index = this.approvees.indexOf(approvee);

    if (index >= 0) {
      this.approvees.splice(index, 1);
    }

    console.log(this.approvees);
  }

}
