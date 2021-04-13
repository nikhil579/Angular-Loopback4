import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {ResidenceVilla, ResidenceVillaRelations} from '../models';

export class ResidenceVillaRepository extends DefaultCrudRepository<
  ResidenceVilla,
  typeof ResidenceVilla.prototype.id,
  ResidenceVillaRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(ResidenceVilla, dataSource);
  }
}
