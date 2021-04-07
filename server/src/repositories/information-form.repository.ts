import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {InformationForm, InformationFormRelations} from '../models';

export class InformationFormRepository extends DefaultCrudRepository<
  InformationForm,
  typeof InformationForm.prototype.id,
  InformationFormRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(InformationForm, dataSource);
  }
}
