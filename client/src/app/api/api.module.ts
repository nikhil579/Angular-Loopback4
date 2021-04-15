/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BrokerControllerService } from './services/broker-controller.service';
import { CommercialPropertyControllerService } from './services/commercial-property-controller.service';
import { CustomerInfoControllerService } from './services/customer-info-controller.service';
import { GenderMasterControllerService } from './services/gender-master-controller.service';
import { InformationCommercialPropertyControllerService } from './services/information-commercial-property-controller.service';
import { InformationFormControllerService } from './services/information-form-controller.service';
import { InformationResidenceApartmentControllerService } from './services/information-residence-apartment-controller.service';
import { InformationResidenceHouseControllerService } from './services/information-residence-house-controller.service';
import { InformationResidenceVillaControllerService } from './services/information-residence-villa-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { RealEstateControllerService } from './services/real-estate-controller.service';
import { RealEstateBrokerControllerService } from './services/real-estate-broker-controller.service';
import { ResidenceApartmentControllerService } from './services/residence-apartment-controller.service';
import { ResidenceHouseControllerService } from './services/residence-house-controller.service';
import { ResidenceVillaControllerService } from './services/residence-villa-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BrokerControllerService,
    CommercialPropertyControllerService,
    CustomerInfoControllerService,
    GenderMasterControllerService,
    InformationCommercialPropertyControllerService,
    InformationFormControllerService,
    InformationResidenceApartmentControllerService,
    InformationResidenceHouseControllerService,
    InformationResidenceVillaControllerService,
    PingControllerService,
    RealEstateControllerService,
    RealEstateBrokerControllerService,
    ResidenceApartmentControllerService,
    ResidenceHouseControllerService,
    ResidenceVillaControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
