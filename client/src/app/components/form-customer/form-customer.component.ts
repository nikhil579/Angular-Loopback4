import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from "src/app/models/customer";
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RealEstate } from 'src/app/models/realEstate';
import { RealEstateService } from 'src/app/services/realEstate.service';
import { InformationForm } from 'src/app/models/informationForm';
import { InformationFormService } from 'src/app/services/information.service';
//by loopback open api spec
import { GenderMaster } from "src/app/api/models";
import { GenderMasterControllerService } from "src/app/api/services";

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

  customerModel: CustomerModel = new CustomerModel()
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder,
    public DB: CustomerService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public RealEstateDB: RealEstateService,
    public InfoFromDatabase: InformationFormService,
    private genderService: GenderMasterControllerService) { }

  customerForm: FormGroup;

  ngOnInit(): void {
    this.createForms()

    if (!this.snapshotId) {    // This will ignore email validations on edit functionality
      this.checkEmails();
    }

    this.route.paramMap.subscribe(params => {
      const cusID = params.get('id')
      if (cusID) {
        this.getOneCustomerById(cusID)
      }
    })
    this.getRealEstateNames();
    this.getInformationInfoArray();
    this.getGenderMaster();
  }

  createForms() {
    this.customerForm = this.fb.group({
      firstName: [this.customerModel.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.customerModel.lastName, Validators.required],
      email: [this.customerModel.email, [Validators.required, Validators.email]],
      phoneNumber: [this.customerModel.phoneNumber, [Validators.required, Validators.max(9999999999)]],
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
      currentResidence: [this.customerModel.currentResidence],
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

  /**
   * Mimics ngModel two way binding. contains edit by id function
   */
  getOneCustomerById(id: string) {
    this.DB.getOneCustomer(id)
      .subscribe((customerModel: CustomerModel) => {
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
      currentResidence: customerModel.currentResidence,
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

  realEstateArray: RealEstate[] = [];
  getRealEstateNames() {
    this.RealEstateDB.getRealEstates()
      .subscribe((realEstateArray: RealEstate[]) => {
        this.realEstateArray = realEstateArray;
      }, err => {
        console.error(err);
      }
      )
  }

  informationInfoArray: InformationForm[] = []
  getInformationInfoArray() {
    this.InfoFromDatabase.getInformationForms()
      .subscribe((informationInfoArray: InformationForm[]) => {
        console.log(informationInfoArray);
        this.informationInfoArray = informationInfoArray;
      }, err => {
        console.error(err);
      }
      )
  }
  selectedBooking;
  selectedPurpose;
  onSubmit() {
    console.log(this.customerForm.value);
  }
  genderMaster: GenderMaster[]
  getGenderMaster(): void {
    this.genderService.find().subscribe(genderMaster => { this.genderMaster = genderMaster })
  }
}// end of class
