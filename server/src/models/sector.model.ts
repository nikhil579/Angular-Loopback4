import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Sector extends BaseMaster {

  constructor(data?: Partial<Sector>) {
    super(data);
  }
}

export interface SectorRelations {
  // describe navigational properties here
}

export type SectorWithRelations = Sector & SectorRelations;
