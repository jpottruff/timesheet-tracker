import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-expansion-panel',
  templateUrl: './user-expansion-panel.component.html',
  styleUrls: ['./user-expansion-panel.component.css']
})
export class UserExpansionPanelComponent implements OnInit {

  @Input() users: User[];
  panelStates: boolean[] = [];
  
  constructor() { }

  ngOnInit(): void {
    // Allows users who are not expanded to still display their info
    this.users.forEach(user => this.panelStates.push(false));
  }

  

}
