import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerModel: CustomerModel = new CustomerModel()
  customerForm: FormGroup;
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder, public DB: CustomerService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will get one customer info only if snapshotid is returned
      this.getOneCustomer()
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
      firstName: [({ value: 'firstName', disabled: true })],
      lastName: [({ value: 'lastName', disabled: true })],
      email: [({ value: 'email', disabled: true })],
      phoneNumber: [({ value: 'phoneNumber', disabled: true })],
      dateOfBirth: [({ value: 'dateOfBirth', disabled: true })],
      gender: [({ value: 'gender', disabled: true })],
      address: [({ value: 'address', disabled: true })],
      city: [({ value: 'city', disabled: true })],
      state: [({ value: 'state', disabled: true })],
      zipcode: [({ value: 'zipcode', disabled: true })],
      occupation: [({ value: 'occupation', disabled: true })],
      orgName: [({ value: 'orgName', disabled: true })],
      designation: [({ value: 'designation', disabled: true })],
      officeLocation: [({ value: 'officeLocation', disabled: true })],
      sector: [({ value: 'sector', disabled: true })],
      residenceType: [({ value: 'residenceType', disabled: true })],
      currResidence: [({ value: 'currResidence', disabled: true })],
      bookingPref: [({ value: 'bookingPref', disabled: true })],
      budget: [({ value: 'budget', disabled: true })],
      possession: [({ value: 'possession', disabled: true })],
      purpose: [({ value: 'purpose', disabled: true })],
      financeDetail: [({ value: 'financeDetail', disabled: true })],
      chFirmName: [({ value: 'chFirmName', disabled: true })],
    })
  }
  /**
   * form control getter shortcut
   * */
  get getForm() { return this.customerForm.controls; }

  getOneCustomer() {
    this.DB.getOneCustomer(this.snapshotId).subscribe(
      (customerModel: CustomerModel) => {
        console.log(customerModel.occupation)
        this.customerModel = customerModel,
          (err: any) => console.error(err);
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
}
