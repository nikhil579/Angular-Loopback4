import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class OccupationMaster extends BaseMaster {

  constructor(data?: Partial<OccupationMaster>) {
    super(data);
  }
}

export interface OccupationMasterRelations {
  // describe navigational properties here
}

export type OccupationMasterWithRelations = OccupationMaster & OccupationMasterRelations;
