import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Possession, PossessionRelations } from '../models';

export class PossessionRepository extends DefaultCrudRepository<
  Possession,
  typeof Possession.prototype.id,
  PossessionRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Possession, dataSource);
  }
}
