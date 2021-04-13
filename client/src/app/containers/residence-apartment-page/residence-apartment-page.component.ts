import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceApartment } from 'src/app/models/residence-apartment';
import { ResidenceApartmentService } from 'src/app/services/residence-apartment.service';

@Component({
  selector: 'app-residence-apartment-page',
  templateUrl: './residence-apartment-page.component.html',
  styleUrls: ['./residence-apartment-page.component.css']
})
export class ResidenceApartmentPageComponent implements OnInit {

  residenceArray: ResidenceApartment[] = []
  id: any
  constructor(private DB: ResidenceApartmentService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getResidence()
  }
  getResidence() {
    this.DB.getResidenceApartments().subscribe(
      (residenceArray: ResidenceApartmentService[]) => {
        console.log(residenceArray);
        residenceArray = residenceArray
      }
    ), err => {
      console.error(err);
    }
  }
}
