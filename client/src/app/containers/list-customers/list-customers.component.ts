import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { Router } from "@angular/router";
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customerModel: CustomerModel[] = []
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'city', 'details', 'update', 'delete'];
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private DB: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList()
  }
  getCustomerList() {
    this.DB.getCustomers().subscribe((customerModel: CustomerModel[]) => {
      console.log(customerModel);
      this.customerModel = customerModel
      this.dataSource = new MatTableDataSource(customerModel)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err);
    })
    console.log(this.customerModel);
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
    this.DB.getCustomers()
      .subscribe((data) => {
        this.dataSource.data = data || []

      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  public redirectToDetails = (id: string) => {
    open('/editCustomer/' + id)
  }
  public redirectToUpdate = (id: string) => {
    this.router.navigate(['/editCustomer/', id])
  }
  public redirectToDelete = (id: string) => {
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
        this.DB.deleteCustomer(id).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
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
