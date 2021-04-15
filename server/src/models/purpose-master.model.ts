import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class PurposeMaster extends BaseMaster {

  constructor(data?: Partial<PurposeMaster>) {
    super(data);
  }
}

export interface PurposeMasterRelations {
  // describe navigational properties here
}

export type PurposeMasterWithRelations = PurposeMaster & PurposeMasterRelations;
