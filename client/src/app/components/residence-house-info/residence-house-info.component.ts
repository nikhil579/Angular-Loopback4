import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResidenceHouse } from 'src/app/models/residence-house';
import { ResidenceHouseService } from 'src/app/services/residence-house.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-residence-house-info',
  templateUrl: './residence-house-info.component.html',
  styleUrls: ['./residence-house-info.component.css']
})
export class ResidenceHouseInfoComponent implements OnInit {
  residenceHouseModel: ResidenceHouse = new ResidenceHouse()
  residenceHouseForm: FormGroup
  @Input() snapshotId: string
  constructor(private fb: FormBuilder, public DB: ResidenceHouseService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForms()
    if (this.snapshotId) {    // This will ignore email validations on edit functionality
      this.getOneResidenceHouse()
    }
    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceHouseById(ID)
      }
    })
  }
  submitted = false
  createForms() {
    this.residenceHouseForm = this.fb.group({
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
  getOneResidenceHouse() {
    this.DB.getOneResidenceHouse(this.snapshotId).subscribe(
      (data: ResidenceHouse) => {
        console.log(data)
        this.residenceHouseModel = data
          , (err: any) => console.error(err);
      }
    )
  }
  /**
* Mimics ngModel two way binding. contains edit by id function
*/
  getOneResidenceHouseById(id: string) {
    this.DB.getOneResidenceHouse(id).subscribe(
      (data: ResidenceHouse) => {
        this.editResidenceHouseById(data),
          (err: any) => console.error(err);
      }
    )
  }
  /** Patch method. Works the same way as ngModel two way binding  */
  editResidenceHouseById(data: ResidenceHouse) {
    this.residenceHouseForm.patchValue({
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
  editResidenceHouse() {
    this.DB.updateResidenceHouse(this.residenceHouseForm.value, this.snapshotId)
      .subscribe(res => {
        console.log(res);
        Swal.fire(
          'Success',
          'Customer Edited Successfully',
          'success'
        )
        this.router.navigateByUrl('/listResidence/House')
      },
        err => {
          console.error(err);
        });
  }

  deleteResidenceHouse(id) {
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
        this.DB.deleteResidenceHouse(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          this.router.navigateByUrl('/listResidence/House')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
}
