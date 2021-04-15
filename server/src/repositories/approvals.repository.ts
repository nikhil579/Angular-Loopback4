import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Approvals, ApprovalsRelations } from '../models';

export class ApprovalsRepository extends DefaultCrudRepository<
  Approvals,
  typeof Approvals.prototype.id,
  ApprovalsRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Approvals, dataSource);
  }
}
