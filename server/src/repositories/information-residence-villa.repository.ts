import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {InformationResidenceVilla, InformationResidenceVillaRelations} from '../models';

export class InformationResidenceVillaRepository extends DefaultCrudRepository<
  InformationResidenceVilla,
  typeof InformationResidenceVilla.prototype.id,
  InformationResidenceVillaRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(InformationResidenceVilla, dataSource);
  }
}
