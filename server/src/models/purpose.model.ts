import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Purpose extends BaseMaster {

  constructor(data?: Partial<Purpose>) {
    super(data);
  }
}

export interface PurposeRelations {
  // describe navigational properties here
}

export type PurposeWithRelations = Purpose & PurposeRelations;
