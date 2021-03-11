import {Entity, model, property, hasMany} from '@loopback/repository';
import {Broker} from './broker.model';

@model()
export class CompanyBroker extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  company: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;

  @hasMany(() => Broker, {keyTo: 'companyName'})
  brokers: Broker[];

  constructor(data?: Partial<CompanyBroker>) {
    super(data);
  }
}

export interface CompanyBrokerRelations {
  // describe navigational properties here
}

export type CompanyBrokerWithRelations = CompanyBroker & CompanyBrokerRelations;
