import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class CurrentResidence extends BaseMaster {

  constructor(data?: Partial<CurrentResidence>) {
    super(data);
  }
}

export interface CurrentResidenceRelations {
  // describe navigational properties here
}

export type CurrentResidenceWithRelations = CurrentResidence & CurrentResidenceRelations;
