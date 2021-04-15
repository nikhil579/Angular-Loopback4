import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Occupation, OccupationRelations } from '../models';

export class OccupationRepository extends DefaultCrudRepository<
  Occupation,
  typeof Occupation.prototype.id,
  OccupationRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Occupation, dataSource);
  }
}
