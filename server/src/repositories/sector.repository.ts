import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Sector, SectorRelations } from '../models';

export class SectorRepository extends DefaultCrudRepository<
  Sector,
  typeof Sector.prototype.id,
  SectorRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Sector, dataSource);
  }
}
