import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class ResidenceType extends BaseMaster {

  constructor(data?: Partial<ResidenceType>) {
    super(data);
  }
}

export interface ResidenceTypeRelations {
  // describe navigational properties here
}

export type ResidenceTypeWithRelations = ResidenceType & ResidenceTypeRelations;
