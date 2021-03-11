import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Broker } from "src/app/models/broker";
import { BrokerService } from "src/app/services/broker.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-broker',
  templateUrl: './form-broker.component.html',
  styleUrls: ['./form-broker.component.css']
})
export class FormBrokerComponent implements OnInit {

  companyArray = ['Our Broker Company', 'Vulcan', '360 Realtors']
  //init
  ngOnInit(): void {
    if (this.id) {
      this.getOne()
    }
  }
  broker: Broker = new Broker()

  @Input() id: string
  // form
  brokerForm: FormGroup
  constructor(public databaseService: BrokerService, private router: Router, private fb: FormBuilder) {
    this.brokerForm = new FormGroup({
      name: new FormControl(this.broker.name, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.broker.email, Validators.required),
      companyName: new FormControl(this.broker.companyName, Validators.required),
      address: new FormControl(this.broker.address, Validators.required),
    })
  }
  get name() { return this.brokerForm.get('name') as FormControl }
  get email() { return this.brokerForm.get('email') as FormControl }
  get companyName() { return this.brokerForm.get('companyName') as FormControl }
  get address() { return this.brokerForm.get('address') as FormControl }
  send() {
    console.log(this.brokerForm.value);
    alert(JSON.stringify(this.brokerForm.value));
  }


  brokerError: Broker
  isCreated: boolean = false
  brokerExist: boolean = false


  validateUser(form: NgForm) {
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
        this.edit()
      }
      else { this.createUser() }
    }
  }
  edit() {
    this.databaseService.updateBroker(this.brokerForm.value, this.id).subscribe(res => {
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
  createUser() {
    if (this.brokerForm.invalid) {
      Swal.fire(
        'Error',
        'Enter all required fields',
        'error'
      )
      return
    }
    else {
      this.databaseService.postBroker(this.brokerForm.value).subscribe(
        data => {
          console.log(data);
          this.isCreated = true
          this.brokerExist = false
          Swal.fire(
            'Broker Created Successfully'
          )
          this.router.navigateByUrl('/listBrokers')
        },
        err => {
          this.brokerError = err.error
          this.isCreated = false
          if (err.status != 200) {
            this.isCreated = false
            this.brokerExist = true
          }
          console.error(err);

        }
      )
    }

  }

  getOne() {
    this.databaseService.getOneBroker(this.id).subscribe((broker: Broker) => {
      console.log(broker);
      this.broker = broker
    }, err => {
      console.log(err);
    }
    )
  }
}
