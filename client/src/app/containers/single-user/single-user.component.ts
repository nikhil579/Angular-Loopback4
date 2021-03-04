import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info';
import { UserDatabaseService } from 'src/app/services/user-database.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  id: any

  users: UserInfo[] = []
  constructor(private databaseService: UserDatabaseService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.databaseService.getUserInfo().subscribe((users: UserInfo[]) => {
      console.log(users);
      this.users = users
    }, err => {
      console.error(err)
    })
  }

}
