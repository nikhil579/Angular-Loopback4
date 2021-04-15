/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ResidenceHouse, 'id'>, schemaOptions: { title: 'NewResidenceHouse', exclude: [ 'id' ] })
 */
export interface NewResidenceHouse {
  address?: string;
  ageOfProperty?: string;
  amenities?: Array<string>;
  area?: number;
  description?: string;
  furnishingStatus?: string;
  loanRequired?: string;
  parking?: string;
  price?: number;
  societyName?: string;
  timeToVisit?: string;
}
