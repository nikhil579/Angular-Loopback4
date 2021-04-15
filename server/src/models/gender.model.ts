import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Gender extends BaseMaster {

  constructor(data?: Partial<Gender>) {
    super(data);
  }
}

export interface GenderRelations {
  // describe navigational properties here
}

export type GenderWithRelations = Gender & GenderRelations;
