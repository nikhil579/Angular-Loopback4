import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UserDatabaseService } from 'src/app/services/user-database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() users: UserInfo
  @Input() id: string
  userInfo: UserInfo = new UserInfo()
  opt = false
  setForm = false
  constructor(private databaseService: UserDatabaseService) { }

  ngOnInit(): void {
    if (this.id) {
      this.getOne();
    }
  }
  getOne() {
    this.databaseService.getOneUserInfo(this.id).subscribe((user: UserInfo) => {
      console.log(user);
      this.userInfo = user
    }, err => {
      console.log(err);

    }
    )
  }
  showForm() {
    if (this.setForm) {
      this.setForm = false
    }
    else {
      this.setForm = true
    }
  }
  settings() {
    if (this.opt) {
      this.opt = false
    }
    else {
      this.opt = true
    }
  }
  delete(user: UserInfo) {
    const id = user.id
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
        this.databaseService.deleteUserInfo(id).subscribe(res => {
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
