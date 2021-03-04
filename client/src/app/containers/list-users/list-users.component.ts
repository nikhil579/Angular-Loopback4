import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info';
import { UserDatabaseService } from 'src/app/services/user-database.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  // searchText
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'city', 'details', 'update', 'delete'];
  users: UserInfo[] = []
  dataSource: any
  @Input() id: string
  @Input() user: UserInfo
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  usersList: UserInfo[];
  constructor(private databaseService: UserDatabaseService) { }

  ngOnInit() {
    this.getUsers()
    // this.databaseService.getUserInfo()
    //   .subscribe((users: UserInfo[]) => {
    //     this.users = users;
    //     this.dataSource = new MatTableDataSource(users)
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator
    //   })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getUsers() {
    this.databaseService.getUserInfo().subscribe((users: UserInfo[]) => {
      console.log(users);
      this.users = users
      this.dataSource = new MatTableDataSource(users)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.users);
  }
  tableUserView() {
    this.databaseService.getUserInfo()
      .subscribe((data) => {
        this.dataSource.data = data || []

      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    open('/singleUser/' + id)
  }
  public redirectToUpdate = (id: string) => {
    // console.log("Update" + " " + id);
    // const routerLink=['/editUser/'+id]
    // console.log(routerLink);
    open('/editUser/' + id)
  }
  public redirectToDelete = (id: string) => {
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
  edit(form: NgForm) {
    this.databaseService.updateUserInfo(form.value, this.id).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'User Details Modified Successfully',
        'success'
      )
    }, err => {
      console.error(err)
    })
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