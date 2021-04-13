import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {ResidenceApartment, ResidenceApartmentRelations} from '../models';

export class ResidenceApartmentRepository extends DefaultCrudRepository<
  ResidenceApartment,
  typeof ResidenceApartment.prototype.id,
  ResidenceApartmentRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(ResidenceApartment, dataSource);
  }
}
