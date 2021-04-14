import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResidenceVilla } from 'src/app/models/residence-villa';
import { ResidenceVillaService } from 'src/app/services/residence-villa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-residence-villa-info',
  templateUrl: './residence-villa-info.component.html',
  styleUrls: ['./residence-villa-info.component.css']
})
export class ResidenceVillaInfoComponent implements OnInit {
  residenceVillaModel: ResidenceVilla = new ResidenceVilla()
  residenceVillaForm: FormGroup
  @Input() snapshotId: string
  constructor(private fb: FormBuilder, public DB: ResidenceVillaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will ignore email validations on edit functionality
      this.getOneResidenceVilla()
    }
    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceVillaById(ID)
      }
    })
  }
  createForms() {
    this.residenceVillaForm = this.fb.group({
      societyName: [({ value: 'societyName', disabled: true }), [Validators.required, Validators.minLength(3)]],
      address: [({ value: 'address', disabled: true }), [Validators.required, Validators.email]],
      ageOfProperty: [({ value: 'ageOfProperty', disabled: true })],
      area: [({ value: 'area', disabled: true })],
      price: [({ value: 'price', disabled: true }), Validators.required],
      description: [({ value: 'description', disabled: true })],
      parking: [({ value: 'parking', disabled: true })],  //select
      furnishingStatus: [({ value: 'furnishingStatus', disabled: true })],//select
      timeToVisit: [({ value: 'timeToVisit', disabled: true })],
      loanRequired: [({ value: 'loanRequired', disabled: true })],//select
      amenities: [({ value: 'amenities', disabled: true })], //multi-select
    })
  }
  getOneResidenceVilla() {
    this.DB.getOneResidenceVilla(this.snapshotId).subscribe(
      (data: ResidenceVilla) => {
        console.log(data)
        this.residenceVillaModel = data
          , (err: any) => console.error(err);
      }
    )
  }
  /**
* Mimics ngModel two way binding. contains edit by id function
*/
  getOneResidenceVillaById(id: string) {
    this.DB.getOneResidenceVilla(id).subscribe(
      (data: ResidenceVilla) => {
        this.editResidenceVillaById(data),
          (err: any) => console.error(err);
      }
    )
  }
  /** Patch method. Works the same way as ngModel two way binding  */
  editResidenceVillaById(data: ResidenceVilla) {
    this.residenceVillaForm.patchValue({
      societyName: data.societyName,
      address: data.address,
      ageOfProperty: data.ageOfProperty,
      area: data.area,
      price: data.price,
      description: data.description,
      parking: data.parking,
      furnishingStatus: data.furnishingStatus,
      timeToVisit: data.timeToVisit,
      loanRequired: data.loanRequired,
      amenities: data.amenities,
    })
  }
  editResidenceVilla() {
    this.DB.updateResidenceVilla(this.residenceVillaForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listResidence/Villa')
      },
        err => {
          console.error(err);
        });
  }

  deleteResidenceVilla(id) {
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
        this.DB.deleteResidenceVilla(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listResidence/Villa')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
}
