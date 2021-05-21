import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommercialProperty } from 'src/app/models/commercial-property';
import { CommercialService } from 'src/app/services/commercial-property.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-commercial-info',
  templateUrl: './commercial-info.component.html',
  styleUrls: ['./commercial-info.component.css']
})
export class CommercialInfoComponent implements OnInit {

  commercialPropertyModel: CommercialProperty = new CommercialProperty()
  commercialPropertyForm: FormGroup
  @Input() snapshotId: string

  constructor(private fb: FormBuilder, public DB: CommercialService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will ignore email validations on edit functionality
      this.getOneCommercialProperty()
    }
    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneCommercialPropertyById(ID)
      }
    })
  }
  createForms() {
    this.commercialPropertyForm = this.fb.group({
      name: [({ value: 'name', disabled: true })],
      address: [({ value: 'address', disabled: true })],
      ageOfProperty: [({ value: 'ageOfProperty', disabled: true })],
      area: [({ value: 'area', disabled: true })],
      totalUnits: [({ value: 'totalUnits', disabled: true })],
      areaBand: [({ value: 'areaBand', disabled: true })],
      price: [({ value: 'price', disabled: true })],
      description: [({ value: 'description', disabled: true })],
      approvals: [({ value: 'approvals', disabled: true })],
      timeToVisit: [({ value: 'timeToVisit', disabled: true })],
      loanRequired: [({ value: 'loanRequired', disabled: true })],
      amenities: [({ value: 'amenities', disabled: true })]
    })
  }
  getOneCommercialProperty() {
    this.DB.getOneCommercial(this.snapshotId).subscribe(
      (data: CommercialProperty) => {
        console.log(data)
        this.commercialPropertyModel = data
          , (err: any) => console.error(err);
      }
    )
  }
  /**
* Mimics ngModel two way binding. contains edit by id function
*/
  getOneCommercialPropertyById(id: string) {
    this.DB.getOneCommercial(id).subscribe(
      (data: CommercialProperty) => {
        this.editCommercialById(data),
          (err: any) => console.error(err);
      }
    )
  }
  editCommercialById(data: CommercialProperty) {
    this.commercialPropertyForm.patchValue({
      name: data.name,
      address: data.address,
      ageOfProperty: data.ageOfProperty,
      area: data.area,
      totalUnits: data.totalUnits,
      areaBand: data.areaBand,
      price: data.price,
      description: data.description,
      approvals: data.approvals,
      timeToVisit: data.timeToVisit,
      loanRequired: data.loanRequired,
      amenities: data.amenities,
    })
  }
  editCommercial() {
    this.DB.updateCommercial(this.commercialPropertyForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listCommercialProperty')
      },
        err => {
          console.error(err);
        });
  }
  deleteCommercial(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.DB.deleteCommercial(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listCommercialProperty')
        },
          err => {
            console.error(err);
          })
      }
    })
  }
}
