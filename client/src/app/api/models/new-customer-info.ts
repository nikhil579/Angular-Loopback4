/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<CustomerInfo, 'id'>, schemaOptions: { title: 'NewCustomerInfo', exclude: [ 'id' ] })
 */
export interface NewCustomerInfo {
  address: string;
  bookingPref?: Array<string>;
  budget?: string;
  budgetValue?: Array<number>;
  chFirmName?: string;
  city: string;
  currentResidence?: string;
  dateOfBirth: string;
  designation?: string;
  email: string;
  financeDetail?: string;
  firstName: string;
  gender: string;
  lastName: string;
  occupation?: string;
  officeLocation?: string;
  orgName?: string;
  phoneNumber: number;
  possession?: string;
  purpose?: Array<string>;
  residenceType?: string;
  sector?: string;
  state: string;
  zipcode: number;
}
