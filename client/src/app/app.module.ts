import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//material UI

import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule } from "@angular/forms";
import { ListBrokerComponent } from './containers/list-broker/list-broker.component';
import { NewBrokerComponent } from './containers/new-broker/new-broker.component';
import { FormBrokerComponent } from './components/form-broker/form-broker.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { NewCustomerComponent } from './containers/new-customer/new-customer.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';
import { ListCustomersComponent } from './containers/list-customers/list-customers.component';

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
