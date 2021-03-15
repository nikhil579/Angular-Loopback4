import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { ListCustomersComponent } from './containers/list-customers/list-customers.component';
import { MainComponent } from './containers/main/main.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { NewCustomerComponent } from './containers/new-customer/new-customer.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'newCustomer',
    component: NewCustomerComponent
  },
  {
    path: 'listCustomers',
    component: ListCustomersComponent
  },
  {
    path: 'editCustomer/:id',
    component: NewCustomerComponent
  },
  {
    path: 'listBrokers',
    component: ListBrokerComponent
  },
  {
    path: 'newBroker',
    component: NewBrokerComponent
  },
  {
    path: 'editBroker/:id',
    component: NewBrokerComponent
  },
  {
    path: 'customerPage/:id',
    component: CustomerPageComponent
  },
  {
    path: 'customerPage',
    component: CustomerPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
