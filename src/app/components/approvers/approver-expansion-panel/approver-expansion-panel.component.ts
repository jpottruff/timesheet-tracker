import { Component, OnInit } from '@angular/core';
import {APPROVER_QUERY_DATA} from '../../../../../mock-data/query-mock.data';

@Component({
  selector: 'app-approver-expansion-panel',
  templateUrl: './approver-expansion-panel.component.html',
  styleUrls: ['./approver-expansion-panel.component.css']
})
export class ApproverExpansionPanelComponent implements OnInit {

  approvers = APPROVER_QUERY_DATA;

  constructor() { }

  ngOnInit() {
    console.log(this.approvers);
  }

}
