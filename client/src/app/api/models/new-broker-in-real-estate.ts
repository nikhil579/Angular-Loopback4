/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Broker, 'id'>, 'realEstateId'>, schemaOptions: { title: 'NewBrokerInRealEstate', exclude: [ 'id' ], optional: [ 'realEstateId' ] })
 */
export interface NewBrokerInRealEstate {
  GST_Number?: string;
  Rera_Number?: string;
  companyName?: string;
  email?: string;
  location?: string;
  mobile?: number;
  name?: string;
  realEstateId?: string;
}
