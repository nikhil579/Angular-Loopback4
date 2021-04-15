import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { FinanceDetail, FinanceDetailRelations } from '../models';

export class FinanceDetailRepository extends DefaultCrudRepository<
  FinanceDetail,
  typeof FinanceDetail.prototype.id,
  FinanceDetailRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(FinanceDetail, dataSource);
  }
}
