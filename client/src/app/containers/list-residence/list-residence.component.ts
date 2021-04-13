import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ResidenceVilla } from 'src/app/models/residence-villa';
import { ResidenceVillaService } from 'src/app/services/residence-villa.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.css']
})
export class ListResidenceComponent implements OnInit {
  villas: ResidenceVilla[] = []
  displayedColumns: string[] = ['societyName', 'address', 'price', 'details', 'update', 'delete'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private databaseService: ResidenceVillaService, private router: Router) { }
  ngOnInit() {
    this.getVillas()
  }
  getVillas() {
    this.databaseService.getResidenceVillas().subscribe((villas: ResidenceVilla[]) => {
      this.villas = villas
      this.dataSource = new MatTableDataSource(villas)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.villas);
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
    this.databaseService.getResidenceVillas()
      .subscribe((data) => {
        this.dataSource.data = data || []
      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    this.router.navigate(['/residencePageVilla/', id])
  }
  //update
  public redirectToUpdate = (id: string) => {
    this.router.navigate(['/editResidenceVilla/', id])
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
        this.databaseService.deleteResidenceVilla(id).subscribe(res => {
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
