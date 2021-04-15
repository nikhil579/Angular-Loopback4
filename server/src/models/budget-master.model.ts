import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class BudgetMaster extends BaseMaster {

  constructor(data?: Partial<BudgetMaster>) {
    super(data);
  }
}

export interface BudgetMasterRelations {
  // describe navigational properties here
}

export type BudgetMasterWithRelations = BudgetMaster & BudgetMasterRelations;
