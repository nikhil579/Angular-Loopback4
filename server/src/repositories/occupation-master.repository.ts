import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {OccupationMaster, OccupationMasterRelations} from '../models';

export class OccupationMasterRepository extends DefaultCrudRepository<
  OccupationMaster,
  typeof OccupationMaster.prototype.id,
  OccupationMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(OccupationMaster, dataSource);
  }
}
