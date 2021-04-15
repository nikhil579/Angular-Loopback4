import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { UnitLayout, UnitLayoutRelations } from '../models';

export class UnitLayoutRepository extends DefaultCrudRepository<
  UnitLayout,
  typeof UnitLayout.prototype.id,
  UnitLayoutRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(UnitLayout, dataSource);
  }
}
