import { Component, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from './services/data.service'

export interface DialogData {
    id: string;
    noteDescription: string;
    noteId: string;
    action: string;
  }

@Component({
    selector: 'note-dialog',
    templateUrl: './noteDialog.html',
    styleUrls: ['./noteDialog.scss'],
  })

  export class NoteDialog {
  
    constructor(
      public dialogRef: MatDialogRef<NoteDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private dataService : DataService) {}

     ngOnInit(){
         console.log(this.data);
     } 
  
    cancel(): void {
      this.dialogRef.close();
    }

    addNote(id, note){
        this.dataService.addNote(id, note);
        this.dialogRef.close();
    }

    deleteNote(reqId, noteId){
        this.dataService.deleteNote(reqId, noteId);
        this.dialogRef.close();
    }
  
  }