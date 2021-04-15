import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {SectorMaster, SectorMasterRelations} from '../models';

export class SectorMasterRepository extends DefaultCrudRepository<
  SectorMaster,
  typeof SectorMaster.prototype.id,
  SectorMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(SectorMaster, dataSource);
  }
}
