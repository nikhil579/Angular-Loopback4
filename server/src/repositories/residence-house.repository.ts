import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {ResidenceHouse, ResidenceHouseRelations} from '../models';

export class ResidenceHouseRepository extends DefaultCrudRepository<
  ResidenceHouse,
  typeof ResidenceHouse.prototype.id,
  ResidenceHouseRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(ResidenceHouse, dataSource);
  }
}
