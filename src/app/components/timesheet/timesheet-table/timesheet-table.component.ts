import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../../../services/timesheet/timesheet.service';
import { AppTimesheet } from 'src/app/interfaces/app-timesheet';

@Component({
  selector: 'app-timesheet-table',
  templateUrl: './timesheet-table.component.html',
  styleUrls: ['./timesheet-table.component.css']
})
export class TimesheetTableComponent implements OnInit {

  isLoading: boolean;
  timesheet: AppTimesheet;
  dates: string[];
  weekTotals: number[] = [];

  displayedColumns: string[] = ['project-title', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'week-total', 'remove'];
  dataSource;


  constructor(private timesheetService: TimesheetService ) { }

  async ngOnInit() {
    this.isLoading = true;
    await this.timesheetService.getTimesheetData()
      .then(data => this.mapResponse(data))
      .catch(err => console.log(err))
      .finally(() => this.isLoading = false);
  }

  mapResponse(data) {
    const {timesheet, dates} = data;
    this.dates = dates;
    this.mapTimesheet(timesheet);
  }

  mapTimesheet(timesheet: AppTimesheet) {
    // const {/props} = timesheet
    console.log(timesheet);
    timesheet.projects.forEach(project => this.weekTotals.push(0))
    this.dataSource = timesheet.projects;
  }
}
