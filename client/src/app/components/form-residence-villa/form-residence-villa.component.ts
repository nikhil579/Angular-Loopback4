import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceVilla } from "src/app/models/residence-villa";
import { ResidenceVillaService } from "src/app/services/residence-villa.service";
import { InformationResidenceVilla } from 'src/app/models/information-residence-villa';
import { InformationFormService } from 'src/app/services/information-residence-villa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-residence-villa',
  templateUrl: './form-residence-villa.component.html',
  styleUrls: ['./form-residence-villa.component.css']
})
export class FormResidenceVillaComponent implements OnInit {

  residenceVillaModel: ResidenceVilla = new ResidenceVilla()
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder,
    public DB: ResidenceVillaService,
    private router: Router,
    private route: ActivatedRoute,
    public InfoFromDatabase: InformationFormService) { }

  residenceVillaForm: FormGroup
  selectedAmenities
  ngOnInit(): void {
    this.createForms()

    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceVillaById(ID)
      }
    })
    this.getInformationInfoArray();
  }
  createForms() {
    this.residenceVillaForm = this.fb.group({
      societyName: [this.residenceVillaModel.societyName, Validators.required],
      address: [this.residenceVillaModel.address, Validators.required],
      ageOfProperty: [this.residenceVillaModel.ageOfProperty],
      area: [this.residenceVillaModel.area],
      price: [this.residenceVillaModel.price],
      description: [this.residenceVillaModel.description],
      parking: [this.residenceVillaModel.parking],  //select
      furnishingStatus: [this.residenceVillaModel.furnishingStatus],//select
      timeToVisit: [this.residenceVillaModel.timeToVisit],
      loanRequired: [this.residenceVillaModel.loanRequired],//select
      amenities: [this.residenceVillaModel.amenities], //multi-select
    })
  }
  get getForm() { return this.residenceVillaForm.controls; }
  //post

  post() {
    this.DB.postResidenceVilla(this.residenceVillaForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listResidenceVilla')
    },
      err => {
        console.error(err)
      }
    )
  }
  send() {
    if (this.snapshotId) {
      this.editResidenceVilla()
    }
    else {
      this.post()
    }
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
        this.router.navigateByUrl('/listResidenceVilla')
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
          this.router.navigateByUrl('/listResidenceVilla')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
  informationInfoArray: InformationResidenceVilla[] = []
  getInformationInfoArray() {
    this.InfoFromDatabase.getInformationForms()
      .subscribe((informationInfoArray: InformationResidenceVilla[]) => {
        console.log(informationInfoArray);
        this.informationInfoArray = informationInfoArray;
      }, err => {
        console.error(err);
      }
      )
  }
  onSubmit() {
    console.log(this.residenceVillaForm.value);
  }

}
