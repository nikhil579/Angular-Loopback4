import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Broker } from 'src/app/models/broker';
import { BrokerService } from 'src/app/services/broker.service';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.css']
})
export class BrokerPageComponent implements OnInit {
  brokerArray: Broker[] = []
  id: any
  constructor(private DB: BrokerService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);

    this.getBrokersPage()
  }
  getBrokersPage() {
    this.DB.getBrokers().subscribe(
      (brokerArray: Broker[]) => {
        console.log(brokerArray);
        this.brokerArray = brokerArray
      }
    ), err => {
      console.error(err);
    }
  }
}
