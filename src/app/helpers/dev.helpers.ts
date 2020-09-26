import { AppProject, AppEntry } from '../interfaces/app-timesheet';

export function simulateCall(milliseconds: number) {
    return new Promise(resolve => setTimeout(() => resolve(`waited ${milliseconds} ms`), milliseconds));
}

const ENTRIES: AppEntry[] = [
    {date: '01-01-2020', hours: 3 },
    {date: '01-02-2020', hours: 0 },
    {date: '01-03-2020', hours: 8 },
    {date: '01-04-2020', hours: 5 },
    {date: '01-05-2020', hours: 1 },
    {date: '01-06-2020', hours: 0 },
    {date: '01-07-2020', hours: 0 },
];

export const PROJECTS: AppProject[] = [
    { projectId: 1, 
      projectTitle: 'Project 1', 
      entries: ENTRIES
    }
]
