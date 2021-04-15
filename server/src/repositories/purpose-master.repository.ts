import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {PurposeMaster, PurposeMasterRelations} from '../models';

export class PurposeMasterRepository extends DefaultCrudRepository<
  PurposeMaster,
  typeof PurposeMaster.prototype.id,
  PurposeMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(PurposeMaster, dataSource);
  }
}
