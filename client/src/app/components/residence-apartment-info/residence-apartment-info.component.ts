import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResidenceApartment } from 'src/app/models/residence-apartment';
import { ResidenceApartmentService } from 'src/app/services/residence-apartment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-residence-apartment-info',
  templateUrl: './residence-apartment-info.component.html',
  styleUrls: ['./residence-apartment-info.component.css']
})
export class ResidenceApartmentInfoComponent implements OnInit {
  residenceApartmentModel: ResidenceApartment = new ResidenceApartment()
  residenceApartmentForm: FormGroup
  @Input() snapshotId: string
  constructor(private fb: FormBuilder, public DB: ResidenceApartmentService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will ignore email validations on edit functionality
      this.getOneResidenceApartment()
    }
    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceApartmentById(ID)
      }
    })
  }
  submitted = false
  createForms() {
    this.residenceApartmentForm = this.fb.group({
      societyName: [({ value: 'societyName', disabled: true }), [Validators.required, Validators.minLength(3)]],
      address: [({ value: 'address', disabled: true }), [Validators.required, Validators.email]],
      ageOfProperty: [({ value: 'ageOfProperty', disabled: true })],
      unitLayout: [({ value: 'unitLayout', disabled: true })],
      area: [({ value: 'area', disabled: true })],
      price: [({ value: 'price', disabled: true }), Validators.required],
      description: [({ value: 'description', disabled: true })],
      parking: [({ value: 'parking', disabled: true })],  //select
      totalfloors: [({ value: 'totalfloors', disabled: true })],  //select
      floorNumber: [({ value: 'floorNumber', disabled: true })],  //select
      furnishingStatus: [({ value: 'furnishingStatus', disabled: true })],//select
      timeToVisit: [({ value: 'timeToVisit', disabled: true })],
      loanRequired: [({ value: 'loanRequired', disabled: true })],//select
      amenities: [({ value: 'amenities', disabled: true })], //multi-select

    })
  }
  getOneResidenceApartment() {
    this.DB.getOneResidenceApartment(this.snapshotId).subscribe(
      (data: ResidenceApartment) => {
        console.log(data)
        this.residenceApartmentModel = data
          , (err: any) => console.error(err);
      }
    )
  }
  /**
* Mimics ngModel two way binding. contains edit by id function
*/
  getOneResidenceApartmentById(id: string) {
    this.DB.getOneResidenceApartment(id).subscribe(
      (data: ResidenceApartment) => {
        this.editResidenceApartmentById(data),
          (err: any) => console.error(err);
      }
    )
  }
  /** Patch method. Works the same way as ngModel two way binding  */
  editResidenceApartmentById(data: ResidenceApartment) {
    this.residenceApartmentForm.patchValue({
      societyName: data.societyName,
      address: data.address,
      ageOfProperty: data.ageOfProperty,
      area: data.area,
      unitLayout: data.unitLayout,
      price: data.price,
      description: data.description,
      parking: data.parking,
      totalfloors: data.totalfloors,
      floorNumber: data.floorNumber,
      furnishingStatus: data.furnishingStatus,
      timeToVisit: data.timeToVisit,
      loanRequired: data.loanRequired,
      amenities: data.amenities,
    })
  }
  editResidenceApartment() {
    this.DB.updateResidenceApartment(this.residenceApartmentForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listResidenceApartment')
      },
        err => {
          console.error(err);
        });
  }

  deleteResidenceApartment(id) {
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
        this.DB.deleteResidenceApartment(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listResidenceApartment')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
}
