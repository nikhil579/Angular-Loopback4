import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info';
import { UserDatabaseService } from 'src/app/services/user-database.service';
import Swal from 'sweetalert2';
import { bookingPref, budget, currResidence, financeDetail, gender, occupation, possession, purpose, residenceType, sector } from './mydata';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  userInfo: UserInfo = new UserInfo()
  @Input() id: string
  userGender: Array<String> = gender
  userOccupation: Array<String> = occupation
  userSector: Array<String> = sector
  userResidence: Array<String> = residenceType
  userCurrentRes: Array<String> = currResidence
  userBookingPref: Array<String> = bookingPref
  userBudget: Array<String> = budget
  userPossession: Array<String> = possession
  userPurpose: Array<String> = purpose
  userFinance: Array<String> = financeDetail
  constructor(public databaseService: UserDatabaseService, private router: Router) { }
  ngOnInit(): void {
    if (this.id) {
      this.getOne();
    }
  }
  send(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      Swal.fire(
        'Error',
        'Enter all required fields',
        'error'
      )
      return
    }
    if (this.id) {
      this.edit(form)
    } else {
      this.post(form)
    }
  }
  edit(form: NgForm) {
    this.databaseService.updateUserInfo(form.value, this.id).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'User Details Modified Successfully',
        'success'
      )
      this.router.navigateByUrl('/')
    }, err => {
      console.error(err)
    })
  }
  post(form: NgForm) {
    this.databaseService.postUserInfo(form.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'User Created Successfully'
      )
      this.router.navigateByUrl('/')
    }, err => {
      console.error(err)
    }
    )
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
}
