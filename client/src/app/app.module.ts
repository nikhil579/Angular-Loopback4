import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from "@angular/forms";
//material UI
import { DemoMaterialModule } from './material-module';
//customer component
import { NewCustomerComponent } from './containers/new-customer/new-customer.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { ListCustomersComponent } from './containers/list-customers/list-customers.component';
//broker component
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { FormBrokerComponent } from './components/form-broker/form-broker.component';
import { BrokerPageComponent } from './containers/broker-page/broker-page.component';
import { BrokerInfoComponent } from './components/broker-info/broker-info.component';
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
//real estate component
import { ListRealEstateComponent } from './containers/list-real-estate/list-real-estate.component';
import { RealEstatePageComponent } from './containers/real-estate-page/real-estate-page.component';
import { RealEstateInfoComponent } from './components/real-estate-info/real-estate-info.component';
import { FormRealEstateComponent } from './components/form-real-estate/form-real-estate.component';
//Villa component
import { ListResidenceComponent } from './containers/list-residence/list-residence.component';
import { NewResidenceVillaComponent } from './containers/new-residence-villa/new-residence-villa.component';
import { FormResidenceVillaComponent } from './components/form-residence-villa/form-residence-villa.component';
import { ResidenceVillaPageComponent } from './containers/residence-villa-page/residence-villa-page.component';
import { ResidenceVillaInfoComponent } from './components/residence-villa-info/residence-villa-info.component';
//Apartment Component
import { NewResidenceApartmentComponent } from './containers/new-residence-apartment/new-residence-apartment.component';
import { FormResidenceApartmentComponent } from './components/form-residence-apartment/form-residence-apartment.component';
import { ListResidenceApartmentComponent } from './containers/list-residence-apartment/list-residence-apartment.component';
import { ResidenceApartmentPageComponent } from './containers/residence-apartment-page/residence-apartment-page.component';
import { ResidenceApartmentInfoComponent } from './components/residence-apartment-info/residence-apartment-info.component';
import { FormResidenceHouseComponent } from './components/form-residence-house/form-residence-house.component';
import { ResidenceHouseInfoComponent } from './components/residence-house-info/residence-house-info.component';
import { ResidenceHousePageComponent } from './containers/residence-house-page/residence-house-page.component';
import { ListResidenceHouseComponent } from './containers/list-residence-house/list-residence-house.component';
import { NewResidenceHouseComponent } from './containers/new-residence-house/new-residence-house.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ListBrokerComponent,
    NewBrokerComponent,
    FormBrokerComponent,
    CustomerInfoComponent,
    CustomerPageComponent,
    NewCustomerComponent,
    FormCustomerComponent,
    ListCustomersComponent,
    BrokerPageComponent,
    BrokerInfoComponent,
    ListRealEstateComponent,
    RealEstatePageComponent,
    RealEstateInfoComponent,
    FormRealEstateComponent,
    FormResidenceVillaComponent,
    ListResidenceComponent,
    ResidenceVillaPageComponent,
    ResidenceVillaInfoComponent,
    NewResidenceVillaComponent,
    NewResidenceApartmentComponent,
    FormResidenceApartmentComponent,
    ListResidenceApartmentComponent,
    ResidenceApartmentPageComponent,
    ResidenceApartmentInfoComponent,
    FormResidenceHouseComponent,
    ResidenceHouseInfoComponent,
    ResidenceHousePageComponent,
    ListResidenceHouseComponent,
    NewResidenceHouseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
