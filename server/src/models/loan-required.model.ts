import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class LoanRequired extends BaseMaster {

  constructor(data?: Partial<LoanRequired>) {
    super(data);
  }
}

export interface LoanRequiredRelations {
  // describe navigational properties here
}

export type LoanRequiredWithRelations = LoanRequired & LoanRequiredRelations;
