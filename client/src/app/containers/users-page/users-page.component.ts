import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UserDatabaseService } from 'src/app/services/user-database.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

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
