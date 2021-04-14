import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommercialProperty } from "src/app/models/commercial-property";
import { InformationCommercialProperty } from 'src/app/models/information-commercial-property';
import { CommercialService } from 'src/app/services/commercial-property.service';
import { InformationCommercialService } from 'src/app/services/information-commercial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-commercial-property',
  templateUrl: './form-commercial-property.component.html',
  styleUrls: ['./form-commercial-property.component.css']
})
export class FormCommercialPropertyComponent implements OnInit {
  commercialPropertyModel: CommercialProperty = new CommercialProperty()
  @Input() snapshotId: string

  constructor(
    private fb: FormBuilder,
    public DB: CommercialService,
    private router: Router,
    private route: ActivatedRoute,
    public InfoFromDatabase: InformationCommercialService) { }

  commercialPropertyForm: FormGroup
  selectedAmenities
  selectedApprovals
  ngOnInit(): void {
    this.createForms()

    this.route.paramMap.subscribe(params => {
      const ID = params.get('id')
      if (ID) {
        this.getOneCommercialPropertyById(ID)
      }
    })
    this.getInformationInfoArray();
  }
  createForms() {
    this.commercialPropertyForm = this.fb.group({
      name: [this.commercialPropertyModel.name, Validators.required],
      address: [this.commercialPropertyModel.address, Validators.required],
      ageOfProperty: [this.commercialPropertyModel.ageOfProperty],
      area: [this.commercialPropertyModel.area],
      totalUnits: [this.commercialPropertyModel.totalUnits],
      areaBand: [this.commercialPropertyModel.areaBand],
      price: [this.commercialPropertyModel.price],
      description: [this.commercialPropertyModel.description],
      approvals: [this.commercialPropertyModel.approvals],
      timeToVisit: [this.commercialPropertyModel.timeToVisit],
      loanRequired: [this.commercialPropertyModel.loanRequired],//select
      amenities: [this.commercialPropertyModel.amenities], //multi-select
    })
  }
  get getForm() { return this.commercialPropertyForm.controls; }

  //post
  post() {
    this.DB.postCommercial(this.commercialPropertyForm.value).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'Customer Created Successfully',
        'success'
      )
      this.router.navigateByUrl('/listCommercialProperty')
    },
      err => {
        console.error(err)
      }
    )
  }
  send() {
    if (this.snapshotId) {
      this.editCommercial()
    }
    else {
      this.post()
    }
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
  informationInfoArray: InformationCommercialProperty[] = []
  getInformationInfoArray() {
    this.InfoFromDatabase.getInformationForms()
      .subscribe((informationInfoArray: InformationCommercialProperty[]) => {
        console.log(informationInfoArray);
        this.informationInfoArray = informationInfoArray;
      }, err => {
        console.error(err);
      }
      )
  }
  onSubmit() {
    console.log(this.commercialPropertyForm.value);
  }
}
