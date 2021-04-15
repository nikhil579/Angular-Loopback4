import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class UnitLayoutMaster extends BaseMaster {

  constructor(data?: Partial<UnitLayoutMaster>) {
    super(data);
  }
}

export interface UnitLayoutMasterRelations {
  // describe navigational properties here
}

export type UnitLayoutMasterWithRelations = UnitLayoutMaster & UnitLayoutMasterRelations;
