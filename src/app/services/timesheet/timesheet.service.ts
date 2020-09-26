import { Injectable } from '@angular/core';
import { AppTimesheet, AppProject } from '../../interfaces/app-timesheet';


import * as devHelpers from '../../helpers/dev.helpers';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor() { }

  async getTimesheetData(): Promise<{}> {
    const response = await devHelpers.simulateCall(2000);
    console.log(response);

    const timesheet: AppTimesheet = {
      userId: 1,
      cycleId: 1,
      timesheetId: 1,
      status: 'NEW',
      projects: this.getProjects(),
    }
    const dates = this.getDates();
    return Promise.resolve({timesheet, dates}); 

  }

  getProjects(): AppProject[] {
    const projects = devHelpers.PROJECTS;

    return projects;
  }

  getDates(): string[] {
    const dates = ['01-01-2020', 
                   '01-02-2020', 
                   '01-03-2020', 
                   '01-04-2020', 
                   '01-05-2020', 
                   '01-06-2020',
                   '01-07-2020'
    ]

    return dates;
  }
}
