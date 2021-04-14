import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { MasterDataSource } from '../datasources/master.datasource';
import { InformationForm, InformationFormRelations } from '../models';

export class InformationFormRepository extends DefaultCrudRepository<
  InformationForm,
  typeof InformationForm.prototype.id,
  InformationFormRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(InformationForm, dataSource);
  }
}
