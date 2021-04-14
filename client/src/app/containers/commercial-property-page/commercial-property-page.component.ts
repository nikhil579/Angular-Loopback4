import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommercialProperty } from 'src/app/models/commercial-property';
import { CommercialService } from 'src/app/services/commercial-property.service';

@Component({
  selector: 'app-commercial-property-page',
  templateUrl: './commercial-property-page.component.html',
  styleUrls: ['./commercial-property-page.component.css']
})
export class CommercialPropertyPageComponent implements OnInit {

  commercialArray: CommercialProperty[] = []
  id: any
  constructor(private DB: CommercialService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getCommercialPage()
  }
  getCommercialPage() {
    this.DB.getCommercials().subscribe(
      (commercialArray: CommercialProperty[]) => {
        console.log(commercialArray);
        this.commercialArray = commercialArray
      }
    ), err => {
      console.error(err);
    }
  }
}
