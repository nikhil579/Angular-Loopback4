import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { UserInfo } from 'src/app/models/user-info';
import { DatabaseService } from 'src/app/services/database.service';
import { UserDatabaseService } from 'src/app/services/user-database.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // notes: Note[] = []
  constructor() { }

  ngOnInit() {
    // this.getNotes();
  }
  // getNotes() {
  //   this.databaseService.getNotes().subscribe((notes: Note[]) => {
  //     console.log(notes);
  //     this.notes = notes
  //   }, err => console.log(err)
  //   )
  // }


}

