import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {FurnishingStatusMaster, FurnishingStatusMasterRelations} from '../models';

export class FurnishingStatusMasterRepository extends DefaultCrudRepository<
  FurnishingStatusMaster,
  typeof FurnishingStatusMaster.prototype.id,
  FurnishingStatusMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(FurnishingStatusMaster, dataSource);
  }
}
