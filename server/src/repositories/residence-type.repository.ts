import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { ResidenceType, ResidenceTypeRelations } from '../models';

export class ResidenceTypeRepository extends DefaultCrudRepository<
  ResidenceType,
  typeof ResidenceType.prototype.id,
  ResidenceTypeRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(ResidenceType, dataSource);
  }
}
