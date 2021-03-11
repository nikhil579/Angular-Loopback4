import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  @Input() customersInput: CustomerModel
  constructor(private DB: CustomerService) { }

  ngOnInit(): void {
  }
  opt = false
  setForm = false
  settings() {
    if (this.opt) {
      this.opt = false
    }
    else {
      this.opt = true
    }
  }
  showForm() {
    if (this.setForm) {
      this.setForm = false
    }
    else {
      this.setForm = true
    }
  }
  delete(customer: CustomerModel) {
    const id = customer.id
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
            'Your file has been deleted.',
            'success'
          )
          location.reload();
        },
          err => {
            console.error(err);
          })
      }
    })
  }
}
