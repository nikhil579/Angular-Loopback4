import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BrokerPageComponent } from './containers/broker-page/broker-page.component';
import { CommercialPropertyPageComponent } from './containers/commercial-property-page/commercial-property-page.component';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { ListCommercialPropertyComponent } from './containers/list-commercial-property/list-commercial-property.component';
import { ListCustomersComponent } from './containers/list-customers/list-customers.component';
import { ListRealEstateComponent } from './containers/list-real-estate/list-real-estate.component';
import { ListResidenceApartmentComponent } from './containers/list-residence-apartment/list-residence-apartment.component';
import { ListResidenceHouseComponent } from './containers/list-residence-house/list-residence-house.component';
import { ListResidenceComponent } from './containers/list-residence/list-residence.component';
import { MainComponent } from './containers/main/main.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { NewCommercialPropertyComponent } from './containers/new-commercial-property/new-commercial-property.component';
import { NewCustomerComponent } from './containers/new-customer/new-customer.component';
import { NewResidenceApartmentComponent } from './containers/new-residence-apartment/new-residence-apartment.component';
import { NewResidenceHouseComponent } from './containers/new-residence-house/new-residence-house.component';
import { NewResidenceVillaComponent } from './containers/new-residence-villa/new-residence-villa.component';
import { ResidenceApartmentPageComponent } from './containers/residence-apartment-page/residence-apartment-page.component';
import { ResidenceHousePageComponent } from './containers/residence-house-page/residence-house-page.component';
import { ResidenceVillaPageComponent } from './containers/residence-villa-page/residence-villa-page.component';


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
    path: 'editCustomer/:id',
    component: NewCustomerComponent
  },
  {
    path: 'customerPage/:id',
    component: CustomerPageComponent
  },
  {
    path: 'listCustomers',
    component: ListCustomersComponent
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
    path: 'brokersPage/:id',
    component: BrokerPageComponent
  },
  {
    path: 'listBrokers',
    component: ListBrokerComponent
  },
  {
    path: 'listRealEstate',
    component: ListRealEstateComponent
  },
  {
    path: 'listResidence/Villa',
    component: ListResidenceComponent
  },
  {
    path: 'listResidence/Apartment',
    component: ListResidenceApartmentComponent
  },
  {
    path: 'listResidence/House',
    component: ListResidenceHouseComponent
  },
  {
    path: 'newResidenceVilla',
    component: NewResidenceVillaComponent
  },
  {
    path: 'residencePageVilla/:id',
    component: ResidenceVillaPageComponent
  },
  {
    path: 'editResidenceVilla/:id',
    component: NewResidenceVillaComponent
  },
  {
    path: 'newResidenceApartment',
    component: NewResidenceApartmentComponent
  },
  {
    path: 'residencePageApartment/:id',
    component: ResidenceApartmentPageComponent
  },
  {
    path: 'editResidenceApartment/:id',
    component: NewResidenceApartmentComponent
  },
  {
    path: 'newResidenceHouse',
    component: NewResidenceHouseComponent
  },
  {
    path: 'residencePageHouse/:id',
    component: ResidenceHousePageComponent
  },
  {
    path: 'editResidenceHouse/:id',
    component: NewResidenceHouseComponent
  },
  {
    path: 'listCommercialProperty',
    component: ListCommercialPropertyComponent
  },
  {
    path: 'newCommercialProperty',
    component: NewCommercialPropertyComponent
  },
  {
    path: 'editCommercialProperty/:id',
    component: NewCommercialPropertyComponent
  },
  {
    path: 'commercialPropertyPage/:id',
    component: CommercialPropertyPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
