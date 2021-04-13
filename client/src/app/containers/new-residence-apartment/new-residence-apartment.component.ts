import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-residence-apartment',
  templateUrl: './new-residence-apartment.component.html',
  styleUrls: ['./new-residence-apartment.component.css']
})
export class NewResidenceApartmentComponent implements OnInit {
  id: any
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log(this.id);

  }
}
