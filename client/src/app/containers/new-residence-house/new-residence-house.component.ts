import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-residence-house',
  templateUrl: './new-residence-house.component.html',
  styleUrls: ['./new-residence-house.component.css']
})
export class NewResidenceHouseComponent implements OnInit {
  id: any
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log(this.id);

  }
}
