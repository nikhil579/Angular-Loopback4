import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { CurrentResidence, CurrentResidenceRelations } from '../models';

export class CurrentResidenceRepository extends DefaultCrudRepository<
  CurrentResidence,
  typeof CurrentResidence.prototype.id,
  CurrentResidenceRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(CurrentResidence, dataSource);
  }
}
