/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<RealEstate, 'id'>, schemaOptions: { title: 'NewRealEstate', exclude: [ 'id' ] })
 */
export interface NewRealEstate {
  GST_Number?: string;
  Rera_Number?: string;
  companyName: string;
  location: string;
}
