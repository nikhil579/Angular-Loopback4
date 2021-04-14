import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDsDataSource } from '../datasources';
import { CommercialProperty, CommercialPropertyRelations } from '../models';

export class CommercialPropertyRepository extends DefaultCrudRepository<
  CommercialProperty,
  typeof CommercialProperty.prototype.id,
  CommercialPropertyRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(CommercialProperty, dataSource);
  }
}
