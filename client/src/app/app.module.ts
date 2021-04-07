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
//custom modules
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { FormBrokerComponent } from './components/form-broker/form-broker.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { NewCustomerComponent } from './containers/new-customer/new-customer.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { ListCustomersComponent } from './containers/list-customers/list-customers.component';
import { BrokerPageComponent } from './containers/broker-page/broker-page.component';
import { BrokerInfoComponent } from './components/broker-info/broker-info.component';
import { ListRealEstateComponent } from './containers/list-real-estate/list-real-estate.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
