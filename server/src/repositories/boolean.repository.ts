import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MasterDataSource} from '../datasources';
import {Boolean, BooleanRelations} from '../models';

export class BooleanRepository extends DefaultCrudRepository<
  Boolean,
  typeof Boolean.prototype.id,
  BooleanRelations
> {
  constructor(
    @inject('datasources.master') dataSource: MasterDataSource,
  ) {
    super(Boolean, dataSource);
  }
}
