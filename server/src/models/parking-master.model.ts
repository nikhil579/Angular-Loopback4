import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class ParkingMaster extends BaseMaster {

  constructor(data?: Partial<ParkingMaster>) {
    super(data);
  }
}

export interface ParkingMasterRelations {
  // describe navigational properties here
}

export type ParkingMasterWithRelations = ParkingMaster & ParkingMasterRelations;
