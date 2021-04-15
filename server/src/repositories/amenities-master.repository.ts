import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {AmenitiesMaster, AmenitiesMasterRelations} from '../models';

export class AmenitiesMasterRepository extends DefaultCrudRepository<
  AmenitiesMaster,
  typeof AmenitiesMaster.prototype.id,
  AmenitiesMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(AmenitiesMaster, dataSource);
  }
}
