import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class BookingPrefMaster extends BaseMaster {

  constructor(data?: Partial<BookingPrefMaster>) {
    super(data);
  }
}

export interface BookingPrefMasterRelations {
  // describe navigational properties here
}

export type BookingPrefMasterWithRelations = BookingPrefMaster & BookingPrefMasterRelations;
