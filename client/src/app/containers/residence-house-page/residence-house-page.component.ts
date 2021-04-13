import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceHouse } from 'src/app/models/residence-house';
import { ResidenceHouseService } from 'src/app/services/residence-house.service';

@Component({
  selector: 'app-residence-house-page',
  templateUrl: './residence-house-page.component.html',
  styleUrls: ['./residence-house-page.component.css']
})
export class ResidenceHousePageComponent implements OnInit {

  residenceArray: ResidenceHouse[] = []
  id: any
  constructor(private DB: ResidenceHouseService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getResidence()
  }
  getResidence() {
    this.DB.getResidenceHouses().subscribe(
      (residenceArray: ResidenceHouseService[]) => {
        console.log(residenceArray);
        residenceArray = residenceArray
      }
    ), err => {
      console.error(err);
    }
  }

}
