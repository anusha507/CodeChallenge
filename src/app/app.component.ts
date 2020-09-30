import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatAccordion } from "@angular/material/expansion";
import { Observable, of } from "rxjs";
import { DataService } from "./services/data.service";
import { PeriodicElement } from "./models/models";
import {MatDialog} from '@angular/material/dialog';
import { NoteDialog } from './noteDialog';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  data$: Observable<PeriodicElement[]> = this.dataService.getData();
  displayedColumns: string[] = [
    "id",
    "title",
    "status",
    "assignee",
    "start_date",
    "percent_complete",
    "active",
  ];
 
  
  constructor(
    private dataService : DataService,
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.dataService.getData();
  }

  addNote(id): void {
    const dialogRef = this.dialog.open(NoteDialog, {
      width: '25%',
      data: {id: id, action: 'add'}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteNote(reqId, noteId): void {
    const dialogRef = this.dialog.open(NoteDialog, {
      width: '25%',
      data: {id: reqId, action: 'delete', noteId: noteId }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
