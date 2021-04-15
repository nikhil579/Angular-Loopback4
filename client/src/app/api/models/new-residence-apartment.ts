/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ResidenceApartment, 'id'>, schemaOptions: { title: 'NewResidenceApartment', exclude: [ 'id' ] })
 */
export interface NewResidenceApartment {
  address?: string;
  ageOfProperty?: string;
  amenities?: Array<string>;
  area?: number;
  description?: string;
  floorNumber?: number;
  furnishingStatus?: string;
  loanRequired?: string;
  parking?: string;
  price?: number;
  societyName?: string;
  timeToVisit?: string;
  totalfloors?: number;
  unitLayout?: Array<string>;
}
