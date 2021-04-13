import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceVilla } from 'src/app/models/residence-villa';
import { ResidenceVillaService } from 'src/app/services/residence-villa.service';

@Component({
  selector: 'app-residence-villa-page',
  templateUrl: './residence-villa-page.component.html',
  styleUrls: ['./residence-villa-page.component.css']
})
export class ResidenceVillaPageComponent implements OnInit {

  residenceArray: ResidenceVilla[] = []
  id: any
  constructor(private DB: ResidenceVillaService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getResidence()
  }
  getResidence() {
    this.DB.getResidenceVillas().subscribe(
      (residenceArray: ResidenceVillaService[]) => {
        console.log(residenceArray);
        residenceArray = residenceArray
      }
    ), err => {
      console.error(err);
    }
  }

}
