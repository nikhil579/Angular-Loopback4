import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class CurrentResidenceMaster extends BaseMaster {

  constructor(data?: Partial<CurrentResidenceMaster>) {
    super(data);
  }
}

export interface CurrentResidenceMasterRelations {
  // describe navigational properties here
}

export type CurrentResidenceMasterWithRelations = CurrentResidenceMaster & CurrentResidenceMasterRelations;
