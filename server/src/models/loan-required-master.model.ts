import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class LoanRequiredMaster extends BaseMaster {

  constructor(data?: Partial<LoanRequiredMaster>) {
    super(data);
  }
}

export interface LoanRequiredMasterRelations {
  // describe navigational properties here
}

export type LoanRequiredMasterWithRelations = LoanRequiredMaster & LoanRequiredMasterRelations;
