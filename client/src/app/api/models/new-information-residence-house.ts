/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<InformationResidenceHouse, 'id'>, schemaOptions: { title: 'NewInformationResidenceHouse', exclude: [ 'id' ] })
 */
export interface NewInformationResidenceHouse {
  address?: string;
  ageOfProperty?: string;
  amenities?: Array<string>;
  area?: number;
  description?: string;
  furnishingStatus?: Array<string>;
  loanRequired?: Array<string>;
  parking?: Array<string>;
  price?: number;
  societyName?: string;
  timeToVisit?: string;
}
