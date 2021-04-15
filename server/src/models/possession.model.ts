import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Possession extends BaseMaster {

  constructor(data?: Partial<Possession>) {
    super(data);
  }
}

export interface PossessionRelations {
  // describe navigational properties here
}

export type PossessionWithRelations = Possession & PossessionRelations;
