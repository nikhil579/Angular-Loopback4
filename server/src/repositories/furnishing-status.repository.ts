import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { FurnishingStatus, FurnishingStatusRelations } from '../models';

export class FurnishingStatusRepository extends DefaultCrudRepository<
  FurnishingStatus,
  typeof FurnishingStatus.prototype.id,
  FurnishingStatusRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(FurnishingStatus, dataSource);
  }
}
