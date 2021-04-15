import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { CurrentResidenceMaster, CurrentResidenceMasterRelations } from '../models';

export class CurrentResidenceMasterRepository extends DefaultCrudRepository<
  CurrentResidenceMaster,
  typeof CurrentResidenceMaster.prototype.id,
  CurrentResidenceMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(CurrentResidenceMaster, dataSource);
  }
}
