import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {LoanRequiredMaster, LoanRequiredMasterRelations} from '../models';

export class LoanRequiredMasterRepository extends DefaultCrudRepository<
  LoanRequiredMaster,
  typeof LoanRequiredMaster.prototype.id,
  LoanRequiredMasterRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(LoanRequiredMaster, dataSource);
  }
}
