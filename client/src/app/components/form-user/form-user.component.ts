import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  users: UserInfo[] = []
  @Input() id: string
  @Input() email: string
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

  //stepper form
  step: any = 1

  constructor(public databaseService: UserDatabaseService, private router: Router) { }
  ngOnInit(): void {
    if (this.id) {
      this.getOne();
    }
  }
  next() {
    this.step = this.step + 1
  }
  previous() {
    this.step = this.step - 1
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
    if (form.valid) {
      if (this.id) {
        this.edit(form)
      } else {
        this.post(form)
      }
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
  validSend(form: NgForm) {
    if (form.invalid) {
      Swal.fire(
        'Error',
        'Enter all required fields',
        'error'
      )
      return
    }
    if (form.valid) {
      console.log(form.value.email);
      this.databaseService.postValidUserInfo(form.value).subscribe(data => {
        console.log(data);
      },
        err => {
          // const validationError = err.errors
          // Object.keys(validationError).forEach(prop => {
          //   const formControl = this.form.get(prop);
          //   if (formControl) {
          //     formControl.setErrors({
          //       serverError: validationError[prop]
          //     });
          //   }
          // })
        }
      )
    }
  }
  getUsers() {
    this.databaseService.getUserInfo().subscribe((users: UserInfo[]) => {
      console.log(users);
      this.users = users
    }, err => {
      console.error(err)
    })
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
  submitHandler(form: NgForm) {
    // console.log(this.checkEmail());
    console.log(this.users.filter((res) => res.email));


    // console.log(this.userInfo.email);

  }
  userError: UserInfo
  isCreated: boolean = false
  userExist: boolean = false

  createUser() {
    this.databaseService.createUser(this.userInfo).subscribe(
      data => {
        console.log(data);
        this.isCreated = true
        this.userExist = false

      },
      err => {
        this.userError = err.error
        this.isCreated = false
        if (err.status != 200) {
          this.isCreated = false
          this.userExist = true
        }
        console.error(err);

      }
    )
  }
  // checkEmail(): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (this.userInfo.email === 'nikhilsonawane21@gmail.com') {
  //         resolve({ 'emailIsUsed': true })
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500)
  //   })
  //   return promise
  // }

}
