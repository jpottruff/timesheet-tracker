import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {APPROVERS} from '../../../../../mock-data/user-mock.data';

@Component({
  selector: 'app-approver-table',
  templateUrl: './approver-table.component.html',
  styleUrls: ['./approver-table.component.css']
})
export class ApproverTableComponent implements OnInit {

  // displayedColumns: string[] = ['approverUsername']
  displayedColumns: string[] = ['approverUsername', 'view-button', 'add-button'];
  dataSource = new MatTableDataSource(APPROVERS);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addApprovees(elementInfo) {
    console.log(elementInfo)
  }

  viewApprovees(elementInfo){
    console.log(elementInfo);
  }

}
