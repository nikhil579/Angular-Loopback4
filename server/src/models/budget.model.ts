import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Budget extends BaseMaster {

  constructor(data?: Partial<Budget>) {
    super(data);
  }
}

export interface BudgetRelations {
  // describe navigational properties here
}

export type BudgetWithRelations = Budget & BudgetRelations;
