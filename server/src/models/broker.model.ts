import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Broker extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;
  @property({
    type: 'string',
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  companyName?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Broker>) {
    super(data);
  }
}

export interface BrokerRelations {
  // describe navigational properties here
}

export type BrokerWithRelations = Broker & BrokerRelations;
