import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Occupation extends BaseMaster {

  constructor(data?: Partial<Occupation>) {
    super(data);
  }
}

export interface OccupationRelations {
  // describe navigational properties here
}

export type OccupationWithRelations = Occupation & OccupationRelations;
