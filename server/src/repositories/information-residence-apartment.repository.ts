import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources/master.datasource';
import { InformationResidenceApartment, InformationResidenceApartmentRelations } from '../models';

export class InformationResidenceApartmentRepository extends DefaultCrudRepository<
  InformationResidenceApartment,
  typeof InformationResidenceApartment.prototype.id,
  InformationResidenceApartmentRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(InformationResidenceApartment, dataSource);
  }
}
