import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { BookingPref, BookingPrefRelations } from '../models';

export class BookingPrefRepository extends DefaultCrudRepository<
  BookingPref,
  typeof BookingPref.prototype.id,
  BookingPrefRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(BookingPref, dataSource);
  }
}
