import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { PeriodicElement } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  REQUEST_DATA : PeriodicElement[] = require('../../assets/data.json');
 
  constructor() { }

  getData(){
    return of(this.REQUEST_DATA);
  }

  addNote(requestId, note){
    this.REQUEST_DATA.map(data =>{
      if(data.id === requestId){
        const newNote = {id: 300, note: note}
        data.notes.push(newNote);
      }
    })
  }

  deleteNote(requestId, noteId){
    this.REQUEST_DATA.map(data =>{
      if(data.id === requestId){
       const newNotes =  data.notes.filter(note => note.id !== noteId)
       data.notes = newNotes;
      }
    })
    console.log(this.REQUEST_DATA);
  }
}
