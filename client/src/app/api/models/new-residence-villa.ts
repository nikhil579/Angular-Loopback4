/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ResidenceVilla, 'id'>, schemaOptions: { title: 'NewResidenceVilla', exclude: [ 'id' ] })
 */
export interface NewResidenceVilla {
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
