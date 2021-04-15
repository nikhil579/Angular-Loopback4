import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Purpose, PurposeRelations } from '../models';

export class PurposeRepository extends DefaultCrudRepository<
  Purpose,
  typeof Purpose.prototype.id,
  PurposeRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Purpose, dataSource);
  }
}
