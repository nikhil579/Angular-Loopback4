import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Amenities, AmenitiesRelations } from '../models';

export class AmenitiesRepository extends DefaultCrudRepository<
  Amenities,
  typeof Amenities.prototype.id,
  AmenitiesRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Amenities, dataSource);
  }
}
