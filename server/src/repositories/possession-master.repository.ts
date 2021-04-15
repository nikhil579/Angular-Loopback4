import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {PossessionMaster, PossessionMasterRelations} from '../models';

export class PossessionMasterRepository extends DefaultCrudRepository<
  PossessionMaster,
  typeof PossessionMaster.prototype.id,
  PossessionMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(PossessionMaster, dataSource);
  }
}
