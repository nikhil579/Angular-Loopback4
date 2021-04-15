import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {ApprovalsMaster, ApprovalsMasterRelations} from '../models';

export class ApprovalsMasterRepository extends DefaultCrudRepository<
  ApprovalsMaster,
  typeof ApprovalsMaster.prototype.id,
  ApprovalsMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(ApprovalsMaster, dataSource);
  }
}
