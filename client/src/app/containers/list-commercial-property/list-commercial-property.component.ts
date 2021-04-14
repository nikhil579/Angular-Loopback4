import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommercialProperty } from "src/app/models/commercial-property";
import { CommercialService } from "src/app/services/commercial-property.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-commercial-property',
  templateUrl: './list-commercial-property.component.html',
  styleUrls: ['./list-commercial-property.component.css']
})
export class ListCommercialPropertyComponent implements OnInit {
  commercialProperty: CommercialProperty[] = []
  displayedColumns: string[] = ['name', 'address', 'price', 'details', 'update', 'delete'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private databaseService: CommercialService, private router: Router) { }

  ngOnInit() {
    this.getCommercialProperty()
  }
  getCommercialProperty() {
    this.databaseService.getCommercials().subscribe((commercialProperty: CommercialProperty[]) => {
      this.commercialProperty = commercialProperty
      this.dataSource = new MatTableDataSource(commercialProperty)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.commercialProperty);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  tableUserView() {
    this.databaseService.getCommercials()
      .subscribe((data) => {
        this.dataSource.data = data || []
      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  //details
  public redirectToDetails = (id: string) => {
    this.router.navigate(['/commercialPropertyPage/', id])
  }
  //update
  public redirectToUpdate = (id: string) => {
    this.router.navigate(['/editCommercialProperty/', id])
  }
  // delete
  public redirectToDelete = (id: string) => {
    console.log(id);
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
        this.databaseService.deleteCommercial(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          location.reload();
        },
          err => {
            console.error(err);
          })
      }
    })
  }

}
