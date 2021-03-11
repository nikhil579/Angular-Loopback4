import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {CompanyBroker, CompanyBrokerRelations, Broker} from '../models';
import {BrokerRepository} from './broker.repository';

export class CompanyBrokerRepository extends DefaultCrudRepository<
  CompanyBroker,
  typeof CompanyBroker.prototype.company,
  CompanyBrokerRelations
> {

  public readonly brokers: HasManyRepositoryFactory<Broker, typeof CompanyBroker.prototype.company>;

  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource, @repository.getter('BrokerRepository') protected brokerRepositoryGetter: Getter<BrokerRepository>,
  ) {
    super(CompanyBroker, dataSource);
    this.brokers = this.createHasManyRepositoryFactoryFor('brokers', brokerRepositoryGetter,);
    this.registerInclusionResolver('brokers', this.brokers.inclusionResolver);
  }
}
