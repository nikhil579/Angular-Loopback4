import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {InformationResidenceApartment, InformationResidenceApartmentRelations} from '../models';

export class InformationResidenceApartmentRepository extends DefaultCrudRepository<
  InformationResidenceApartment,
  typeof InformationResidenceApartment.prototype.id,
  InformationResidenceApartmentRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(InformationResidenceApartment, dataSource);
  }
}
