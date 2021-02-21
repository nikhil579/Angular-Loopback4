import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() notes: Note
  opt = false
  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }
  settings() {
    if (this.opt) {
      this.opt = false
    }
    else {
      this.opt = true
    }
  }
  delete(note: Note) {
    const id = note.id
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.databaseService.deleteNote(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          location.reload();
        },
          err => {
            console.error(err);
          })
      }
    })
  }
}
