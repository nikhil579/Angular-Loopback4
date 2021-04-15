import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources';
import { LoanRequired, LoanRequiredRelations } from '../models';

export class LoanRequiredRepository extends DefaultCrudRepository<
  LoanRequired,
  typeof LoanRequired.prototype.id,
  LoanRequiredRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(LoanRequired, dataSource);
  }
}
