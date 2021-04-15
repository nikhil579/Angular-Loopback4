import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Approvals extends BaseMaster {

  constructor(data?: Partial<Approvals>) {
    super(data);
  }
}

export interface ApprovalsRelations {
  // describe navigational properties here
}

export type ApprovalsWithRelations = Approvals & ApprovalsRelations;
