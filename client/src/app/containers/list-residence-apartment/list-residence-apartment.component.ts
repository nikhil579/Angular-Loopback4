import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ResidenceApartment } from 'src/app/models/residence-apartment';
import { ResidenceApartmentService } from 'src/app/services/residence-apartment.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-residence-apartment',
  templateUrl: './list-residence-apartment.component.html',
  styleUrls: ['./list-residence-apartment.component.css']
})
export class ListResidenceApartmentComponent implements OnInit {
  apartments: ResidenceApartment[] = []
  displayedColumns: string[] = ['societyName', 'address', 'price', 'details', 'update', 'delete'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private databaseService: ResidenceApartmentService, private router: Router) { }
  ngOnInit() {
    this.getApartments()
  }
  getApartments() {
    this.databaseService.getResidenceApartments().subscribe((apartments: ResidenceApartment[]) => {
      this.apartments = apartments
      this.dataSource = new MatTableDataSource(apartments)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.apartments);
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
    this.databaseService.getResidenceApartments()
      .subscribe((data) => {
        this.dataSource.data = data || []
      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    this.router.navigate(['/residencePageApartment/', id])
  }
  //update
  public redirectToUpdate = (id: string) => {
    this.router.navigate(['/editResidenceApartment/', id])
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
        this.databaseService.deleteResidenceApartment(id).subscribe(res => {
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
