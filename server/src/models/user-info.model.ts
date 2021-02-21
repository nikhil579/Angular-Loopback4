import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UserInfo extends Entity {
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
    type: 'string',
  })
  bookingPref?: string;

  @property({
    type: 'number',
  })
  budget?: number;

  @property({
    type: 'string',
  })
  possession?: string;

  @property({
    type: 'string',
  })
  purpose?: string;

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
  })
  chSMname?: string;

  @property({
    type: 'number',
  })
  chMobNo?: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserInfo>) {
    super(data);
  }
}

export interface UserInfoRelations {
  // describe navigational properties here
}

export type UserInfoWithRelations = UserInfo & UserInfoRelations;
