import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-residence-villa',
  templateUrl: './new-residence-villa.component.html',
  styleUrls: ['./new-residence-villa.component.css']
})
export class NewResidenceVillaComponent implements OnInit {
  id: any
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    console.log(this.id);

  }
}
