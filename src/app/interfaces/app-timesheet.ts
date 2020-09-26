export interface AppTimesheet {
    userId: number;
    cycleId: number;
    timesheetId: number;
    status: string;
    projects: AppProject[];
    isApproved?: boolean;
    approverId?: string;
}

export interface AppProject {
    projectId: number;
    projectTitle: string;
    entries: AppEntry[];
}

export interface AppEntry {
    date: string;
    hours: number;
}
