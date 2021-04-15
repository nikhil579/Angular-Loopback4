import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class Parking extends BaseMaster {

  constructor(data?: Partial<Parking>) {
    super(data);
  }
}

export interface ParkingRelations {
  // describe navigational properties here
}

export type ParkingWithRelations = Parking & ParkingRelations;
