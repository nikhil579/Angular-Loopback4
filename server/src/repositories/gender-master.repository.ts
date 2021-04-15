import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {GenderMaster, GenderMasterRelations} from '../models';

export class GenderMasterRepository extends DefaultCrudRepository<
  GenderMaster,
  typeof GenderMaster.prototype.id,
  GenderMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(GenderMaster, dataSource);
  }
}
