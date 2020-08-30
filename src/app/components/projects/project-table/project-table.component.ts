import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Project} from 'src/app/classes/project'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const PROJECT_DATA: Project[] = [
  {projectId: 1, projectName: 'Test Project 1', groupId: 1, isActive: true, referenceNo: 1111},
  {projectId: 2, projectName: 'Test Project 2', groupId: 1, isActive: true, referenceNo: 1112},
  {projectId: 3, projectName: 'Test Project 3', groupId: 1, isActive: false, referenceNo: 1113},
  {projectId: 4, projectName: 'Test Project 4', groupId: 1, isActive: false, referenceNo: 1114},
  {projectId: 5, projectName: 'Test Project 5', groupId: 1, isActive: true, referenceNo: 1115},
  {projectId: 6, projectName: 'Test Project 6', groupId: 1, isActive: true, referenceNo: 1116},
  {projectId: 7, projectName: 'Test Project 7', groupId: 1, isActive: true, referenceNo: 1117},
  {projectId: 8, projectName: 'Test Project 8', groupId: 2, isActive: true, referenceNo: 1118},
  {projectId: 9, projectName: 'Test Project 9', groupId: 2, isActive: true, referenceNo: 1119},
  {projectId: 10, projectName: 'Test Project 10', groupId: 1, isActive: true, referenceNo: 1110},
]


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  
  pageTitle="projects"
  displayedColumns: string[] = ['projectId', 'projectName', 'groupId', 'isActive', 'referenceNo'];
  dataSource = new MatTableDataSource(PROJECT_DATA);
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
