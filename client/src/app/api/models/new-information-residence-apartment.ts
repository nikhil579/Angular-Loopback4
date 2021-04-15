/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<InformationResidenceApartment, 'id'>, schemaOptions: { title: 'NewInformationResidenceApartment', exclude: [ 'id' ] })
 */
export interface NewInformationResidenceApartment {
  address?: string;
  ageOfProperty?: string;
  amenities?: Array<string>;
  area?: number;
  description?: string;
  floorNumber?: number;
  furnishingStatus?: Array<string>;
  loanRequired?: Array<string>;
  parking?: Array<string>;
  price?: number;
  societyName?: string;
  timeToVisit?: string;
  totalfloors?: number;
  unitLayout?: Array<string>;
}
