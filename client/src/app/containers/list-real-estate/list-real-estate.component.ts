import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RealEstate } from 'src/app/models/realEstate';
import { RealEstateService } from 'src/app/services/realEstate.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-real-estate',
  templateUrl: './list-real-estate.component.html',
  styleUrls: ['./list-real-estate.component.css']
})
export class ListRealEstateComponent implements OnInit {
  displayedColumns: string[] = ['companyName', 'location', 'details', 'update', 'delete'];
  realEstateArray: RealEstate[] = []
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private databaseService: RealEstateService, private router: Router) { }

  ngOnInit() {
    this.getRealEstate()
  }
  getRealEstate() {
    this.databaseService.getRealEstates().subscribe((realEstateArray: RealEstate[]) => {
      console.log(realEstateArray);
      this.realEstateArray = realEstateArray
      this.dataSource = new MatTableDataSource(realEstateArray)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
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
    this.databaseService.getRealEstates()
      .subscribe((data) => {
        this.dataSource.data = data || []
      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    console.log(id);
  }
  public redirectToUpdate = (id: string) => {
    console.log(id);
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
        this.databaseService.deleteRealEstate(id).subscribe(res => {
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
