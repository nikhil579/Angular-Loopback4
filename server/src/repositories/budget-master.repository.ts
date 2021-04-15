import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {BudgetMaster, BudgetMasterRelations} from '../models';

export class BudgetMasterRepository extends DefaultCrudRepository<
  BudgetMaster,
  typeof BudgetMaster.prototype.id,
  BudgetMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(BudgetMaster, dataSource);
  }
}
