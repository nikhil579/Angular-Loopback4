/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<CommercialProperty, 'id'>, schemaOptions: { title: 'NewCommercialProperty', exclude: [ 'id' ] })
 */
export interface NewCommercialProperty {
  address?: string;
  ageOfProperty?: string;
  amenities?: Array<string>;
  approvals?: string;
  area?: number;
  areaBand?: number;
  description?: string;
  loanRequired?: string;
  name?: string;
  price?: string;
  timeToVisit?: string;
  totalUnits?: number;
}
