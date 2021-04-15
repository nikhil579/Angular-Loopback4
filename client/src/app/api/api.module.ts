/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AmenitiesControllerService } from './services/amenities-controller.service';
import { ApprovalsControllerService } from './services/approvals-controller.service';
import { BookingPrefControllerService } from './services/booking-pref-controller.service';
import { BooleanControllerService } from './services/boolean-controller.service';
import { BrokerControllerService } from './services/broker-controller.service';
import { BudgetControllerService } from './services/budget-controller.service';
import { CommercialPropertyControllerService } from './services/commercial-property-controller.service';
import { CurrentResidenceControllerService } from './services/current-residence-controller.service';
import { CustomerInfoControllerService } from './services/customer-info-controller.service';
import { FinanceDetailControllerService } from './services/finance-detail-controller.service';
import { FurnishingStatusControllerService } from './services/furnishing-status-controller.service';
import { GenderControllerService } from './services/gender-controller.service';
import { InformationCommercialPropertyControllerService } from './services/information-commercial-property-controller.service';
import { InformationFormControllerService } from './services/information-form-controller.service';
import { InformationResidenceApartmentControllerService } from './services/information-residence-apartment-controller.service';
import { InformationResidenceHouseControllerService } from './services/information-residence-house-controller.service';
import { InformationResidenceVillaControllerService } from './services/information-residence-villa-controller.service';
import { LoanRequiredControllerService } from './services/loan-required-controller.service';
import { OccupationControllerService } from './services/occupation-controller.service';
import { ParkingControllerService } from './services/parking-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { PossessionControllerService } from './services/possession-controller.service';
import { PurposeControllerService } from './services/purpose-controller.service';
import { RealEstateControllerService } from './services/real-estate-controller.service';
import { RealEstateBrokerControllerService } from './services/real-estate-broker-controller.service';
import { ResidenceApartmentControllerService } from './services/residence-apartment-controller.service';
import { ResidenceHouseControllerService } from './services/residence-house-controller.service';
import { ResidenceTypeControllerService } from './services/residence-type-controller.service';
import { ResidenceVillaControllerService } from './services/residence-villa-controller.service';
import { SectorControllerService } from './services/sector-controller.service';
import { UnitLayoutControllerService } from './services/unit-layout-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AmenitiesControllerService,
    ApprovalsControllerService,
    BookingPrefControllerService,
    BooleanControllerService,
    BrokerControllerService,
    BudgetControllerService,
    CommercialPropertyControllerService,
    CurrentResidenceControllerService,
    CustomerInfoControllerService,
    FinanceDetailControllerService,
    FurnishingStatusControllerService,
    GenderControllerService,
    InformationCommercialPropertyControllerService,
    InformationFormControllerService,
    InformationResidenceApartmentControllerService,
    InformationResidenceHouseControllerService,
    InformationResidenceVillaControllerService,
    LoanRequiredControllerService,
    OccupationControllerService,
    ParkingControllerService,
    PingControllerService,
    PossessionControllerService,
    PurposeControllerService,
    RealEstateControllerService,
    RealEstateBrokerControllerService,
    ResidenceApartmentControllerService,
    ResidenceHouseControllerService,
    ResidenceTypeControllerService,
    ResidenceVillaControllerService,
    SectorControllerService,
    UnitLayoutControllerService,
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
