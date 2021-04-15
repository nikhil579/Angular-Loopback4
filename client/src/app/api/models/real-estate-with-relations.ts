/* tslint:disable */
/* eslint-disable */
import { BrokerWithRelations } from './broker-with-relations';

/**
 * (tsType: RealEstateWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RealEstateWithRelations {
  GST_Number?: string;
  Rera_Number?: string;
  brokers?: Array<BrokerWithRelations>;
  companyName: string;
  id?: string;
  location: string;
}
