import { model, property } from '@loopback/repository';
import { BaseMaster } from './base-master.model';

@model()
export class BookingPref extends BaseMaster {

  constructor(data?: Partial<BookingPref>) {
    super(data);
  }
}

export interface BookingPrefRelations {
  // describe navigational properties here
}

export type BookingPrefWithRelations = BookingPref & BookingPrefRelations;
