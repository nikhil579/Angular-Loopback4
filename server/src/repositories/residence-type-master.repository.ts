import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {ResidenceTypeMaster, ResidenceTypeMasterRelations} from '../models';

export class ResidenceTypeMasterRepository extends DefaultCrudRepository<
  ResidenceTypeMaster,
  typeof ResidenceTypeMaster.prototype.id,
  ResidenceTypeMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(ResidenceTypeMaster, dataSource);
  }
}
