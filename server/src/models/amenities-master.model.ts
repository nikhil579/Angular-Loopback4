import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class AmenitiesMaster extends BaseMaster {

  constructor(data?: Partial<AmenitiesMaster>) {
    super(data);
  }
}

export interface AmenitiesMasterRelations {
  // describe navigational properties here
}

export type AmenitiesMasterWithRelations = AmenitiesMaster & AmenitiesMasterRelations;
