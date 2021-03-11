import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {CustomerInfo, CustomerInfoRelations} from '../models';

export class CustomerInfoRepository extends DefaultCrudRepository<
  CustomerInfo,
  typeof CustomerInfo.prototype.email,
  CustomerInfoRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(CustomerInfo, dataSource);
  }
}
