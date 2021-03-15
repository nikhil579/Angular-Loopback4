import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { gender, occupation, sector, residenceType, currResidence, bookingPref, budget, possession, purpose, financeDetail } from '../form-customer/mydata';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customerModel: CustomerModel = new CustomerModel()
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder, public DB: CustomerService, private router: Router,
    private httpClient: HttpClient, private route: ActivatedRoute) { }

  customerForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will get one customer info only if snapshotid is returned
      this.getOneCustomer()
    }

    if (!this.snapshotId) {    // This will ignore email validations on edit functionality
      this.checkEmails();
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
  /**
   * form control getter shortcut
   * */
  get getForm() { return this.customerForm.controls; }

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
   * Mimics ngModel two way binding. contains edit by id function
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
  /** Patch method. Works the same way as ngModel two way binding  */
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
  checkEmails() {                             /* method to check email on each key press, tap and debounce in RxJS Library */
    this.emailControl.valueChanges.pipe(      /* pipe will filter out email when typed on emailControl Field */
      debounceTime(1000),                     /* Don't update the model with every keypress, instead wait 1s and then update */
      tap(emailControl => {                   /* tap will check on each keypress, with 500ms debounce time */
        if (emailControl !== '' && !this.emailControl.invalid) {
          this.emailControl.markAsPending();
        }
        else {
          this.emailControl.setErrors({ 'invalid': true });
        }
      })
    ).subscribe(emailData => {
      /**filter query to search by email */
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
  deleteCustomerId(id) {
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
        this.DB.deleteCustomer(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listCustomers')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
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
}
