import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources/master.datasource';
import { InformationResidenceHouse, InformationResidenceHouseRelations } from '../models';

export class InformationResidenceHouseRepository extends DefaultCrudRepository<
  InformationResidenceHouse,
  typeof InformationResidenceHouse.prototype.id,
  InformationResidenceHouseRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(InformationResidenceHouse, dataSource);
  }
}
