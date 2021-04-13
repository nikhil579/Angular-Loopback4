import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceHouse } from "src/app/models/residence-house";
import { ResidenceHouseService } from "src/app/services/residence-house.service";
import { InformationResidenceHouse } from 'src/app/models/information-residence-house';
import { InformationFormService } from 'src/app/services/information-residence-house.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-residence-house',
  templateUrl: './form-residence-house.component.html',
  styleUrls: ['./form-residence-house.component.css']
})
export class FormResidenceHouseComponent implements OnInit {

  residenceHouseModel: ResidenceHouse = new ResidenceHouse()
  @Input() snapshotId: string
  constructor(
    private fb: FormBuilder,
    public DB: ResidenceHouseService,
    private router: Router,
    private route: ActivatedRoute,
    public InfoFromDatabase: InformationFormService) { }

  residenceHouseForm: FormGroup
  selectedAmenities
  ngOnInit(): void {
    this.createForms()

    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneResidenceHouseById(ID)
      }
    })
    this.getInformationInfoArray();
  }
  createForms() {
    this.residenceHouseForm = this.fb.group({
      societyName: [this.residenceHouseModel.societyName, Validators.required],
      address: [this.residenceHouseModel.address, Validators.required],
      ageOfProperty: [this.residenceHouseModel.ageOfProperty],
      area: [this.residenceHouseModel.area],
      price: [this.residenceHouseModel.price],
      description: [this.residenceHouseModel.description],
      parking: [this.residenceHouseModel.parking],  //select
      furnishingStatus: [this.residenceHouseModel.furnishingStatus],//select
      timeToVisit: [this.residenceHouseModel.timeToVisit],
      loanRequired: [this.residenceHouseModel.loanRequired],//select
      amenities: [this.residenceHouseModel.amenities], //multi-select
    })
  }
  get getForm() { return this.residenceHouseForm.controls; }
  //post

  post() {
    this.DB.postResidenceHouse(this.residenceHouseForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listResidenceHouse')
    },
      err => {
        console.error(err)
      }
    )
  }
  send() {
    if (this.snapshotId) {
      this.editResidenceHouse()
    }
    else {
      this.post()
    }
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
        this.router.navigateByUrl('/listResidenceHouse')
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
          this.router.navigateByUrl('/listResidenceHouse')
        },
          err => {
            console.error(err);
          })
      }
    })

  }
  informationInfoArray: InformationResidenceHouse[] = []
  getInformationInfoArray() {
    this.InfoFromDatabase.getInformationForms()
      .subscribe((informationInfoArray: InformationResidenceHouse[]) => {
        console.log(informationInfoArray);
        this.informationInfoArray = informationInfoArray;
      }, err => {
        console.error(err);
      }
      )
  }
  onSubmit() {
    console.log(this.residenceHouseForm.value);
  }

}
