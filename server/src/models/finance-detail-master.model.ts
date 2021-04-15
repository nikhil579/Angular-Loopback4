import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class FinanceDetailMaster extends BaseMaster {

  constructor(data?: Partial<FinanceDetailMaster>) {
    super(data);
  }
}

export interface FinanceDetailMasterRelations {
  // describe navigational properties here
}

export type FinanceDetailMasterWithRelations = FinanceDetailMaster & FinanceDetailMasterRelations;
