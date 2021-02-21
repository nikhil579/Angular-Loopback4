import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {
  note: Note = new Note()
  @Input() id: string
  constructor(public databaseService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    if (this.id) {
      this.getOne();
    }
  }
  send(form: NgForm) {
    // console.log(form.value);
    if(this.id) {this.edit(form)}
    else {this.post(form)}
  }
  edit(form: NgForm) {
    this.databaseService.updateNote(form.value, this.id).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Note Modified'
      )
      this.router.navigateByUrl('/')
    }, err => {
      console.error(err);
    })
  }
  post(form: NgForm) {
    this.databaseService.postNote(form.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Note Created'
      )
      this.router.navigateByUrl('/')
    }, err => {
      console.error(err);
    }
    )
  }
  getOne() {
    this.databaseService.getOneNote(this.id).subscribe((note: Note) => {
      this.note = note
    }, err => {
      console.log(err);

    }
    )
  }
}
