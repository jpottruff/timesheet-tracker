import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Project} from 'src/app/classes/project'
import {PROJECT_DATA} from '../../../../../mock-data/project-mock.data';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  
  // pageTitle="projects"
  displayedColumns: string[] = ['projectId', 'projectName', 'groupId', 'isActive', 'referenceNo'];
  dataSource = new MatTableDataSource(PROJECT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
