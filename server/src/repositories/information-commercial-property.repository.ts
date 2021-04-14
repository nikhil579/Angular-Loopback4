import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources/master.datasource';
import { InformationCommercialProperty, InformationCommercialPropertyRelations } from '../models';

export class InformationCommercialPropertyRepository extends DefaultCrudRepository<
  InformationCommercialProperty,
  typeof InformationCommercialProperty.prototype.id,
  InformationCommercialPropertyRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(InformationCommercialProperty, dataSource);
  }
}
