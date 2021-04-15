import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Parking, ParkingRelations } from '../models';

export class ParkingRepository extends DefaultCrudRepository<
  Parking,
  typeof Parking.prototype.id,
  ParkingRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Parking, dataSource);
  }
}
