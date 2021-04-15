import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class SectorMaster extends BaseMaster {

  constructor(data?: Partial<SectorMaster>) {
    super(data);
  }
}

export interface SectorMasterRelations {
  // describe navigational properties here
}

export type SectorMasterWithRelations = SectorMaster & SectorMasterRelations;
