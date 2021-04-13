import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {InformationCommercialProperty, InformationCommercialPropertyRelations} from '../models';

export class InformationCommercialPropertyRepository extends DefaultCrudRepository<
  InformationCommercialProperty,
  typeof InformationCommercialProperty.prototype.id,
  InformationCommercialPropertyRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(InformationCommercialProperty, dataSource);
  }
}
