export interface PeriodicElement {
    title: string;
    id: number;
    status: string;
    assignee: string;
    start_date: string;
    percent_complete: string;
    active: boolean;
    details: details;
    notes: note[];
  }
  export interface details {
    requestor: requestor;
    summary: string;
    justification: string;
  }
  
  export interface requestor {
    id: number;
    name: string;
    department: string;
  }
  
  export interface note {
    id: number;
    note: string;
  }