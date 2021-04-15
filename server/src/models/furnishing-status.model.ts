import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class FurnishingStatus extends BaseMaster {

  constructor(data?: Partial<FurnishingStatus>) {
    super(data);
  }
}

export interface FurnishingStatusRelations {
  // describe navigational properties here
}

export type FurnishingStatusWithRelations = FurnishingStatus & FurnishingStatusRelations;
