import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly URL: string = 'http://localhost:3000/customer-infos'
  private httpheader = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(this.URL)
  }
  postCustomer(customer: CustomerModel) {
    return this.http.post(this.URL, customer);
  }
  updateCustomer(customer: CustomerModel, id: string) {
    return this.http.put(this.URL + `/${id}`, customer)
  }
  deleteCustomer(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneCustomer(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
  createCustomer(customer: CustomerModel) {
    return this.http.post(this.URL, customer, this.httpheader);
  }
}
