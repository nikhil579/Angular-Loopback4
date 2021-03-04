import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Broker } from 'src/app/models/broker';
import { BrokerService } from 'src/app/services/broker.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-broker',
  templateUrl: './list-broker.component.html',
  styleUrls: ['./list-broker.component.css']
})
export class ListBrokerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'company', 'address', 'update', 'delete'];
  brokers: Broker[] = []
  dataSource: any
  @Input() inputBroker: Broker
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  brokersList: Broker[];
  constructor(private databaseService: BrokerService) { }

  ngOnInit() {
    this.getBrokers()
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getBrokers() {
    this.databaseService.getBrokers().subscribe((brokers: Broker[]) => {
      console.log(brokers);
      this.brokers = brokers
      this.dataSource = new MatTableDataSource(brokers)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
    }, err => {
      console.error(err)
    })
    console.log(this.brokers);
  }
  tableUserView() {
    this.databaseService.getBrokers()
      .subscribe((data) => {
        this.dataSource.data = data || []

      })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }
  //update

  public redirectToUpdate = (id: string) => {
    console.log(id);
    open('/editBroker/' + id)
  }
  broker: Broker = new Broker()
  @Input() id: string

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
        this.databaseService.deleteBroker(id).subscribe(res => {
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
  edit(form: NgForm) {
    this.databaseService.updateBroker(form.value, this.id).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Success',
        'User Details Modified Successfully',
        'success'
      )
    }, err => {
      console.error(err)
    })
  }
  delete(user: Broker) {
    const id = user.email
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
        this.databaseService.deleteBroker(id).subscribe(res => {
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
