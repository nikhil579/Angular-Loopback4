import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources/master.datasource';
import { InformationResidenceVilla, InformationResidenceVillaRelations } from '../models';

export class InformationResidenceVillaRepository extends DefaultCrudRepository<
  InformationResidenceVilla,
  typeof InformationResidenceVilla.prototype.id,
  InformationResidenceVillaRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(InformationResidenceVilla, dataSource);
  }
}
