import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { Budget, BudgetRelations } from '../models';

export class BudgetRepository extends DefaultCrudRepository<
  Budget,
  typeof Budget.prototype.id,
  BudgetRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Budget, dataSource);
  }
}
