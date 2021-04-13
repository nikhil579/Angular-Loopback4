import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-real-estate',
  templateUrl: './form-real-estate.component.html',
  styleUrls: ['./form-real-estate.component.css']
})
export class FormRealEstateComponent implements OnInit {
  @Input() snapshotId: string
  constructor() { }

  ngOnInit(): void {
  }

}
