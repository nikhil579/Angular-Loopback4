import { Entity, model, property } from '@loopback/repository';

@model()
export class InformationForm extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  gender?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  occupation?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  sector?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  residenceType?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  currResidence?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  bookingPref?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  budget?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  possession?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  purpose?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  financeDetail?: string[];


  constructor(data?: Partial<InformationForm>) {
    super(data);
  }
}

export interface InformationFormRelations {
  // describe navigational properties here
}

export type InformationFormWithRelations = InformationForm & InformationFormRelations;
