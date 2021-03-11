import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerModel } from "src/app/models/customer";
import { CustomerService } from 'src/app/services/customer.service';
import { bookingPref, budget, currResidence, financeDetail, gender, occupation, possession, purpose, residenceType, sector } from './mydata';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { tap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
  customerModel: CustomerModel = new CustomerModel()
  @Input() snapshotId: string
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
  companyArray = ['Our Broker Company', 'Vulcan', '360 Realtors']

  constructor(private fb: FormBuilder, public DB: CustomerService, private router: Router, private httpClient: HttpClient) { }

  customerForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    if (this.snapshotId) {
      this.getOneCustomer()
    }
    this.createForms()
    this.checkEmails()

  }

  createForms() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      occupation: [''],
      orgName: [''],
      designation: [''],
      officeLocation: [''],
      sector: [''],
      residenceType: [''],
      currResidence: [''],
      bookingPref: [''],
      budget: [''],
      possession: [''],
      purpose: [''],
      financeDetail: [''],
      chFirmName: [''],  //get record form real estate company e.g. broker company
    })
  }

  get getForm() { return this.customerForm.controls; }


  post() {
    this.DB.postCustomer(this.customerForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listCustomers')
    },
      err => {
        // if (err.status != 200) {
        //   console.error("USER ALREADY EXIST");
        // }
        console.error(err)
      }
    )
  }

  send() {
    if (this.customerForm.invalid) {// REMOVE
      Swal.fire(
        'Error',
        'Form Invalid',
        'error'
      )
    }
    if (this.snapshotId) {
      this.editCustomer()
    }
    else {
      this.post()
    }

  }
  getOneCustomer() {
    this.DB.getOneCustomer(this.snapshotId).subscribe(
      (customerModel: CustomerModel) => {
        console.log(customerModel)
        this.customerModel = customerModel
          , (err: any) => console.error(err);
      }
    )
  }
  editCustomer() {
    this.DB.updateCustomer(this.customerForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listCustomers')
      },
        err => {
          console.error(err);
        });
  }
  /**
   * for email validations
   */

  get emailControl() {
    return this.customerForm.get('email') as FormControl
  }
  customersArray: CustomerModel[];
  //method to check email on each key press, tap and debounce in RxJS Library
  checkEmails() {
    this.emailControl.valueChanges.pipe(      //pipe will filter out email when typed on emailControl Field
      debounceTime(500),
      tap(emailControl => {                   //tap will check on each keypress, with 500ms debounce time
        if (emailControl !== '' && !this.emailControl.invalid) {
          this.emailControl.markAsPending();
        }
        else {
          this.emailControl.setErrors({ 'invalid': true });
        }
      })
    ).subscribe(emailData => {
      const filterQuery = {
        offset: 0, where: { 'email': emailData }
      };
      const newFilterQuery = encodeURIComponent(JSON.stringify(filterQuery));
      this.httpClient.get(`http://localhost:3000/customer-infos?filter=${newFilterQuery}`)
        .subscribe((customersArray: CustomerModel[]) => {
          if (customersArray.length > 0) {
            this.emailControl.markAsPending({ onlySelf: false });
            this.emailControl.setErrors({ notUnique: true })
          } else {
            this.emailControl.markAsPending({ onlySelf: false });
            this.emailControl.setErrors(null)
          }
        })
    })
  }
  // Don't update the model with every keypress, instead wait 1s and then update

}//end of class



  // checkEmails() {
  //   this.DB.getCustomers().subscribe(
  //     (customersArray: CustomerModel[]) => {
  //       customersArray.filter((res) => {
  //         console.log(res.email);
  //       })
  //       const custObjs = customersArray.find(function (item) {
  //         return item.email === 'nikhilsonawane21@gmail.com'
  //       })
  //       console.log("FOUND " + custObjs.email);
  //     }
  //   ),
  //     err => {
  //       console.error(err);
  //     }
  // }
