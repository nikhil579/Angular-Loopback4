import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  broker: Broker = new Broker()
  @Input() id: string

  constructor(public brokerDS: BrokerService, private router: Router) { }

  ngOnInit(): void {
  }
  brokerError: Broker
  isCreated: boolean = false
  brokerExist: boolean = false


  validateUser(form:NgForm){
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
        this.createUser()
    }
  }
  createUser() {
    this.brokerDS.postBroker(this.broker).subscribe(
      data => {
        console.log(data);
        this.isCreated = true
        this.brokerExist = false
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
