import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Broker } from 'src/app/models/broker';
import { BrokerService } from 'src/app/services/broker.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-broker-info',
  templateUrl: './broker-info.component.html',
  styleUrls: ['./broker-info.component.css']
})
export class BrokerInfoComponent implements OnInit {
  brokerModel: Broker = new Broker()
  brokerForm: FormGroup
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder, public DB: BrokerService, private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will ignore email validations on edit functionality
      this.getOneBroker()
    }
    this.route.paramMap.subscribe(params => {
      const brokID = params.get('id')
      if (brokID) {
        this.getOneBrokerById(brokID)
      }
    })
  }
  submitted = false
  createForms() {
    this.brokerForm = this.fb.group({
      name: [({ value: 'name', disabled: true }), [Validators.required, Validators.minLength(3)]],
      email: [({ value: 'email', disabled: true }), [Validators.required, Validators.email]],
      mobile: [({ value: 'mobile', disabled: true }), [Validators.required]],
      companyName: [({ value: 'companyName', disabled: true }), [Validators.required]],
      location: [({ value: 'location', disabled: true }), Validators.required],
      Rera_Number: [({ value: 'Rera_Number', disabled: true })],
      GST_Number: [({ value: 'GST_Number', disabled: true })]
    })
  }
  /**
 * form control getter shortcut
 * */

  getOneBroker() {
    this.DB.getOneBroker(this.snapshotId).subscribe(
      (brokerModel: Broker) => {
        console.log(brokerModel)
        this.brokerModel = brokerModel
          , (err: any) => console.error(err);
      }
    )
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
      GST_Number: brokerModel.GST_Number
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
  get emailControl() {
    return this.brokerForm.get('email') as FormControl
  }
  deleteBrokerById(id) {
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
        this.DB.deleteBroker(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listBrokers')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
}
