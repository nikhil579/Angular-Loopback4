import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class ApprovalsMaster extends BaseMaster {

  constructor(data?: Partial<ApprovalsMaster>) {
    super(data);
  }
}

export interface ApprovalsMasterRelations {
  // describe navigational properties here
}

export type ApprovalsMasterWithRelations = ApprovalsMaster & ApprovalsMasterRelations;
