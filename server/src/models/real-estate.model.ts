import { Entity, model, property, hasMany } from '@loopback/repository';
import { Broker } from './broker.model';

@model()
export class RealEstate extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  companyName: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @hasMany(() => Broker, { keyTo: 'realEstateId' })
  brokers: Broker[];

  constructor(data?: Partial<RealEstate>) {
    super(data);
  }
}

export interface RealEstateRelations {
  // describe navigational properties here
}

export type RealEstateWithRelations = RealEstate & RealEstateRelations;
