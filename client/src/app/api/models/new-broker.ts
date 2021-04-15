/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Broker, 'id'>, schemaOptions: { title: 'NewBroker', exclude: [ 'id' ] })
 */
export interface NewBroker {
  GST_Number?: string;
  Rera_Number?: string;
  companyName?: string;
  email?: string;
  location?: string;
  mobile?: number;
  name?: string;
  realEstateId?: string;
}
