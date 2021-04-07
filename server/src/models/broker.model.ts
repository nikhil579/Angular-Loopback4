import { Entity, model, property } from '@loopback/repository';

@model()
export class Broker extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'number',
  })
  mobile?: number;

  @property({
    type: 'string',
  })
  companyName?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  Rera_Number?: string;

  @property({
    type: 'string',
  })
  GST_Number?: string;

  @property({
    type: 'string',
  })
  realEstateId?: string;

  constructor(data?: Partial<Broker>) {
    super(data);
  }
}

export interface BrokerRelations {
  // describe navigational properties here
}

export type BrokerWithRelations = Broker & BrokerRelations;
