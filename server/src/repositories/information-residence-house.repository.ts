import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {InformationResidenceHouse, InformationResidenceHouseRelations} from '../models';

export class InformationResidenceHouseRepository extends DefaultCrudRepository<
  InformationResidenceHouse,
  typeof InformationResidenceHouse.prototype.id,
  InformationResidenceHouseRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(InformationResidenceHouse, dataSource);
  }
}
