import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Amenities extends BaseMaster {

  constructor(data?: Partial<Amenities>) {
    super(data);
  }
}

export interface AmenitiesRelations {
  // describe navigational properties here
}

export type AmenitiesWithRelations = Amenities & AmenitiesRelations;
