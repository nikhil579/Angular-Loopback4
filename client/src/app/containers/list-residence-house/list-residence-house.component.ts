import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ResidenceHouse } from 'src/app/models/residence-house';
import { ResidenceHouseService } from 'src/app/services/residence-house.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-residence-house',
  templateUrl: './list-residence-house.component.html',
  styleUrls: ['./list-residence-house.component.css']
})
export class ListResidenceHouseComponent implements OnInit {

  houses: ResidenceHouse[] = []
  displayedColumns: string[] = ['societyName', 'address', 'price', 'details', 'update', 'delete'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private databaseService: ResidenceHouseService, private router: Router) { }
  ngOnInit() {
    this.getHouses()
  }
  getHouses() {
    this.databaseService.getResidenceHouses().subscribe((houses: ResidenceHouse[]) => {
      this.houses = houses
      this.dataSource = new MatTableDataSource(houses)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.houses);
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
    this.databaseService.getResidenceHouses()
      .subscribe((data) => {
        this.dataSource.data = data || []
      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    this.router.navigate(['/residencePageHouse/', id])
  }
  //update
  public redirectToUpdate = (id: string) => {
    this.router.navigate(['/editResidenceHouse/', id])
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
        this.databaseService.deleteResidenceHouse(id).subscribe(res => {
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
