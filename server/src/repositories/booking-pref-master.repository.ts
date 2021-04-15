import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {BookingPrefMaster, BookingPrefMasterRelations} from '../models';

export class BookingPrefMasterRepository extends DefaultCrudRepository<
  BookingPrefMaster,
  typeof BookingPrefMaster.prototype.id,
  BookingPrefMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(BookingPrefMaster, dataSource);
  }
}
