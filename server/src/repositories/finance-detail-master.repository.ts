import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {FinanceDetailMaster, FinanceDetailMasterRelations} from '../models';

export class FinanceDetailMasterRepository extends DefaultCrudRepository<
  FinanceDetailMaster,
  typeof FinanceDetailMaster.prototype.id,
  FinanceDetailMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(FinanceDetailMaster, dataSource);
  }
}
