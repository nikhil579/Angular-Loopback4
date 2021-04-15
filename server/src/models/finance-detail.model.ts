import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class FinanceDetail extends BaseMaster {

  constructor(data?: Partial<FinanceDetail>) {
    super(data);
  }
}

export interface FinanceDetailRelations {
  // describe navigational properties here
}

export type FinanceDetailWithRelations = FinanceDetail & FinanceDetailRelations;
