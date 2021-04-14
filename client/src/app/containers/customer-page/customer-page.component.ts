import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customersArray: CustomerModel[] = []
  id: any
  constructor(private DB: CustomerService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getCustomersPage()
  }
  getCustomersPage() {
    this.DB.getCustomers().subscribe(
      (customersArray: CustomerModel[]) => {
        console.log(customersArray);
        this.customersArray = customersArray
      }
    ), err => {
      console.error(err);
    }
  }
}
