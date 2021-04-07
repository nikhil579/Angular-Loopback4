import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';
import { Broker } from "src/app/models/broker";
import { RealEstate } from 'src/app/models/realEstate';
import { BrokerService } from "src/app/services/broker.service";
import { RealEstateService } from 'src/app/services/realEstate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-broker',
  templateUrl: './form-broker.component.html',
  styleUrls: ['./form-broker.component.css']
})
export class FormBrokerComponent implements OnInit {
  ngOnInit(): void {
    this.createForms()
    if (!this.snapshotId) {    // This will ignore email validations on edit functionality
      this.checkEmails();
    }
    this.route.paramMap.subscribe(params => {
      const brokID = params.get('id')
      if (brokID) {
        this.getOneBrokerById(brokID)
      }
    })
    this.getRealEstateNames()
  }

  brokerModel: Broker = new Broker()

  @Input() snapshotId: string

  constructor(
    private fb: FormBuilder, public DB: BrokerService, public RealEstateDB: RealEstateService, private router: Router,
    private httpClient: HttpClient, private route: ActivatedRoute) { }
  brokerForm: FormGroup
  submitted = false
  createForms() {
    this.brokerForm = this.fb.group({
      name: [this.brokerModel.name, [Validators.required, Validators.minLength(3)]],
      email: [this.brokerModel.email, [Validators.required, Validators.email]],
      mobile: [this.brokerModel.mobile, [Validators.required]],
      companyName: [this.brokerModel.companyName, [Validators.required]],
      location: [this.brokerModel.location, Validators.required],
      Rera_Number: [this.brokerModel.Rera_Number],
      GST_Number: [this.brokerModel.GST_Number],
      realEstateId: [this.brokerModel.realEstateId]
    })
  }
  /**
 * form control getter shortcut
 * */
  get getForm() { return this.brokerForm.controls; }
  //post
  post() {
    this.DB.postBroker(this.brokerForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listBrokers')
    },
      err => {
        console.error(err)
      }
    )
  }
  send() {
    if (this.snapshotId) {
      this.editBroker()
    }
    else {
      this.post()
    }
  }

  /**
 * Mimics ngModel two way binding. contains edit by id function
 */
  getOneBrokerById(id: string) {
    this.DB.getOneBroker(id).subscribe(
      (brokerModel: Broker) => {
        this.editBrokerById(brokerModel),
          (err: any) => console.error(err);
      }
    )
  }
  /** Patch method. Works the same way as ngModel two way binding  */
  editBrokerById(brokerModel: Broker) {
    this.brokerForm.patchValue({
      name: brokerModel.name,
      email: brokerModel.email,
      mobile: brokerModel.mobile,
      companyName: brokerModel.companyName,
      location: brokerModel.location,
      Rera_Number: brokerModel.Rera_Number,
      GST_Number: brokerModel.GST_Number,
      realEstateId: brokerModel.realEstateId
    })
  }
  editBroker() {
    this.DB.updateBroker(this.brokerForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listBrokers')
      },
        err => {
          console.error(err);
        });
  }
  brokersArray: Broker[];
  get emailControl() {
    return this.brokerForm.get('email') as FormControl
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
      this.httpClient.get(`http://localhost:3000/brokers?filter=${newFilterQuery}`)
        .subscribe((brokersArray: Broker[]) => {
          if (brokersArray.length > 0) {
            this.emailControl.markAsPending({ onlySelf: false });
            this.emailControl.setErrors({ notUnique: true })
          } else {
            this.emailControl.markAsPending({ onlySelf: false });
            this.emailControl.setErrors(null)
          }
        })
    })
  } // end of check email function
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
  onSubmit() {
    console.log(this.brokerForm.value);
  }

  selectedObject: string = '';
  onSelectChange(name) {
    const reID = this.realEstateArray.filter(function (data) {
      return data.companyName === name
    }).map(function (data) {
      return data.id
    })
    this.selectedObject = reID[0];
    this.brokerForm.controls['realEstateId'].setValue(reID[0]);
  }

}
