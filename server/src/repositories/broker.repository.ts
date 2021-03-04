import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Broker, BrokerRelations} from '../models';

export class BrokerRepository extends DefaultCrudRepository<
  Broker,
  typeof Broker.prototype.email,
  BrokerRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Broker, dataSource);
  }
}
