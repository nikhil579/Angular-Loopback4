import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class FurnishingStatusMaster extends BaseMaster {

  constructor(data?: Partial<FurnishingStatusMaster>) {
    super(data);
  }
}

export interface FurnishingStatusMasterRelations {
  // describe navigational properties here
}

export type FurnishingStatusMasterWithRelations = FurnishingStatusMaster & FurnishingStatusMasterRelations;
