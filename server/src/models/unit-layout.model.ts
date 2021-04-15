import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class UnitLayout extends BaseMaster {

  constructor(data?: Partial<UnitLayout>) {
    super(data);
  }
}

export interface UnitLayoutRelations {
  // describe navigational properties here
}

export type UnitLayoutWithRelations = UnitLayout & UnitLayoutRelations;
