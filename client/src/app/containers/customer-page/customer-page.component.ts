import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerInfoComponent } from "src/app/components/customer-info/customer-info.component"; //client\src\app\components\customer-info\customer-info.component.ts
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customersArray: CustomerModel[] = []
  constructor(private DB: CustomerService) { }

  ngOnInit(): void {
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
