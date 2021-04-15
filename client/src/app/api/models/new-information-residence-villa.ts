/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<InformationResidenceVilla, 'id'>, schemaOptions: { title: 'NewInformationResidenceVilla', exclude: [ 'id' ] })
 */
export interface NewInformationResidenceVilla {
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
