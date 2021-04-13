import { Entity, model, property } from '@loopback/repository';

@model()
export class CustomerInfo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  phoneNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  dateOfBirth: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'number',
    required: true,
  })
  zipcode: number;

  @property({
    type: 'string',
  })
  occupation?: string;

  @property({
    type: 'string',
  })
  orgName?: string;

  @property({
    type: 'string',
  })
  designation?: string;

  @property({
    type: 'string',
  })
  officeLocation?: string;

  @property({
    type: 'string',
  })
  sector?: string;

  @property({
    type: 'string',
  })
  residenceType?: string;

  @property({
    type: 'string',
  })
  currResidence?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  bookingPref?: string[];

  @property({
    type: 'string',
  })
  budget?: string;

  @property({
    type: 'array',
    itemType: 'number',
  })
  budgetValue?: number[];

  @property({
    type: 'string',
  })
  possession?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  purpose?: string[];

  @property({
    type: 'string',
  })
  financeDetail?: string;

  @property({
    type: 'string',
  })
  chFirmName?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<CustomerInfo>) {
    super(data);
  }
}

export interface CustomerInfoRelations {
  // describe navigational properties here
}

export type CustomerInfoWithRelations = CustomerInfo & CustomerInfoRelations;
