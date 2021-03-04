import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Broker } from '../models/broker';
@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  private readonly URL: string = 'http://localhost:3000/brokers'
  constructor(private http: HttpClient) { }
  getBrokers() {
    return this.http.get(this.URL)
  }
  postBroker(broker: Broker) {
    return this.http.post(this.URL, broker);
  }
  updateBroker(broker: Broker, id: string) {
    return this.http.put(this.URL + `/${id}`, broker)
  }
  deleteBroker(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneBroker(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
