import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-broker',
  templateUrl: './new-broker.component.html',
  styleUrls: ['./new-broker.component.css']
})
export class NewBrokerComponent implements OnInit {
  id: any
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log(this.id);

  }

}
