import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-commercial-property',
  templateUrl: './new-commercial-property.component.html',
  styleUrls: ['./new-commercial-property.component.css']
})
export class NewCommercialPropertyComponent implements OnInit {

  id: any
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log(this.id);

  }

}
