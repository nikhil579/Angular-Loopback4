import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {ParkingMaster, ParkingMasterRelations} from '../models';

export class ParkingMasterRepository extends DefaultCrudRepository<
  ParkingMaster,
  typeof ParkingMaster.prototype.id,
  ParkingMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(ParkingMaster, dataSource);
  }
}
