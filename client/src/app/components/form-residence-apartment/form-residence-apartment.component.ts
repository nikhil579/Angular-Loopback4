import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceApartment } from "src/app/models/residence-apartment";
import { ResidenceApartmentService } from "src/app/services/residence-apartment.service";
import { InformationResidenceApartment } from 'src/app/models/information-residence-apartment';
import { InformationFormService } from 'src/app/services/information-residence-apartment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-residence-apartment',
  templateUrl: './form-residence-apartment.component.html',
  styleUrls: ['./form-residence-apartment.component.css']
})
export class FormResidenceApartmentComponent implements OnInit {

  residenceApartmentModel: ResidenceApartment = new ResidenceApartment()
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder,
    public DB: ResidenceApartmentService,
    private router: Router,
    private route: ActivatedRoute,
    public InfoFromDatabase: InformationFormService) { }

  residenceApartmentForm: FormGroup
  selectedAmenities
  selectedLayout
  ngOnInit(): void {
    this.createForms()

    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceApartmentById(ID)
      }
    })
    this.getInformationInfoArray();
  }
  createForms() {
    this.residenceApartmentForm = this.fb.group({
      societyName: [this.residenceApartmentModel.societyName, Validators.required],
      address: [this.residenceApartmentModel.address, Validators.required],
      ageOfProperty: [this.residenceApartmentModel.ageOfProperty],
      unitLayout: [this.residenceApartmentModel.unitLayout],
      area: [this.residenceApartmentModel.area],
      price: [this.residenceApartmentModel.price],
      description: [this.residenceApartmentModel.description],
      parking: [this.residenceApartmentModel.parking],  //select
      totalfloors: [this.residenceApartmentModel.totalfloors],
      floorNumber: [this.residenceApartmentModel.floorNumber],
      furnishingStatus: [this.residenceApartmentModel.furnishingStatus],//select
      timeToVisit: [this.residenceApartmentModel.timeToVisit],
      loanRequired: [this.residenceApartmentModel.loanRequired],//select
      amenities: [this.residenceApartmentModel.amenities], //multi-select
    })
  }
  get getForm() { return this.residenceApartmentForm.controls; }
  //post

  post() {
    this.DB.postResidenceApartment(this.residenceApartmentForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listResidenceApartment')
    },
      err => {
        console.error(err)
      }
    )
  }
  send() {
    if (this.snapshotId) {
      this.editResidenceApartment()
    }
    else {
      this.post()
    }
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
  informationInfoArray: InformationResidenceApartment[] = []
  getInformationInfoArray() {
    this.InfoFromDatabase.getInformationForms()
      .subscribe((informationInfoArray: InformationResidenceApartment[]) => {
        console.log(informationInfoArray);
        this.informationInfoArray = informationInfoArray;
      }, err => {
        console.error(err);
      }
      )
  }
  onSubmit() {
    console.log(this.residenceApartmentForm.value);
  }

}
