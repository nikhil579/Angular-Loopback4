import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from "src/app/models/customer";
import { CustomerService } from 'src/app/services/customer.service';
import { bookingPref, budget, currResidence, financeDetail, gender, occupation, possession, purpose, residenceType, sector } from './mydata';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



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

  constructor(
    private fb: FormBuilder, public DB: CustomerService, private router: Router,
    private httpClient: HttpClient, private route: ActivatedRoute) { }

  customerForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    //will get one customer info only if snapshotif is provided
      this.getOneCustomer()
    }

    if (!this.snapshotId) {
      this.checkEmails()    //will ignore email validations on edit functionality
    }

    this.route.paramMap.subscribe(params => {
      const cusID = params.get('id')
      if (cusID) {
        this.getOneCustomerById(cusID)
      }
    })
  }

  createForms() {
    this.customerForm = this.fb.group({
      firstName: [this.customerModel.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.customerModel.lastName, Validators.required],
      email: [this.customerModel.email, [Validators.email, Validators.required]],
      phoneNumber: [this.customerModel.phoneNumber, [Validators.required, Validators.maxLength(10)]],
      dateOfBirth: [this.customerModel.dateOfBirth, Validators.required],
      gender: [this.customerModel.gender, Validators.required],
      address: [this.customerModel.address, Validators.required],
      city: [this.customerModel.city, Validators.required],
      state: [this.customerModel.state, Validators.required],
      zipcode: [this.customerModel.zipcode, Validators.required],
      occupation: [this.customerModel.occupation],
      orgName: [this.customerModel.orgName],
      designation: [this.customerModel.designation],
      officeLocation: [this.customerModel.officeLocation],
      sector: [this.customerModel.sector],
      residenceType: [this.customerModel.residenceType],
      currResidence: [this.customerModel.currResidence],
      bookingPref: [this.customerModel.bookingPref],
      budget: [this.customerModel.budget],
      possession: [this.customerModel.possession],
      purpose: [this.customerModel.purpose],
      financeDetail: [this.customerModel.financeDetail],
      chFirmName: [this.customerModel.chFirmName],
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
        console.error(err)
      }
    )
  }

  send() {
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
        this.editCustomer()
          , (err: any) => console.error(err);
      }
    )
  }
  /**
   * for edit id in 2nd way
   */
  getOneCustomerById(id: string) {
    this.DB.getOneCustomer(id).subscribe(
      (customerModel: CustomerModel) => {
        console.log(customerModel);
        this.editCustomerById(customerModel),
          (err: any) => console.error(err);
      }
    )
  }
  editCustomerById(customerModel: CustomerModel) {
    this.customerForm.patchValue({
      firstName: customerModel.firstName,
      lastName: customerModel.lastName,
      email: customerModel.email,
      phoneNumber: customerModel.phoneNumber,
      dateOfBirth: customerModel.dateOfBirth,
      gender: customerModel.gender,
      address: customerModel.address,
      city: customerModel.city,
      state: customerModel.state,
      zipcode: customerModel.zipcode,
      occupation: customerModel.occupation,
      orgName: customerModel.orgName,
      designation: customerModel.designation,
      officeLocation: customerModel.officeLocation,
      sector: customerModel.sector,
      residenceType: customerModel.residenceType,
      currResidence: customerModel.currResidence,
      bookingPref: customerModel.bookingPref,
      budget: customerModel.budget,
      possession: customerModel.possession,
      purpose: customerModel.purpose,
      financeDetail: customerModel.financeDetail,
      chFirmName: customerModel.chFirmName
    })
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



  /**Email Validations 
   * 
  */
  customersArray: CustomerModel[];
  get emailControl() {
    return this.customerForm.get('email') as FormControl
  }
  checkEmails() {
    //method to check email on each key press, tap and debounce in RxJS Library
    this.emailControl.valueChanges.pipe(      // pipe will filter out email when typed on emailControl Field
      debounceTime(1000),                     // Don't update the model with every keypress, instead wait 1s and then update
      tap(emailControl => {                   // tap will check on each keypress, with 500ms debounce time
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


}//end of class