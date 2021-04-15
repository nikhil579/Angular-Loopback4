import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class ResidenceTypeMaster extends BaseMaster {

  constructor(data?: Partial<ResidenceTypeMaster>) {
    super(data);
  }
}

export interface ResidenceTypeMasterRelations {
  // describe navigational properties here
}

export type ResidenceTypeMasterWithRelations = ResidenceTypeMaster & ResidenceTypeMasterRelations;
