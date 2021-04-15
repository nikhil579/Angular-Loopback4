import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class PossessionMaster extends BaseMaster {

  constructor(data?: Partial<PossessionMaster>) {
    super(data);
  }
}

export interface PossessionMasterRelations {
  // describe navigational properties here
}

export type PossessionMasterWithRelations = PossessionMaster & PossessionMasterRelations;
