import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {RealEstate, RealEstateRelations, Broker} from '../models';
import {BrokerRepository} from './broker.repository';

export class RealEstateRepository extends DefaultCrudRepository<
  RealEstate,
  typeof RealEstate.prototype.id,
  RealEstateRelations
> {

  public readonly brokers: HasManyRepositoryFactory<Broker, typeof RealEstate.prototype.id>;

  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource, @repository.getter('BrokerRepository') protected brokerRepositoryGetter: Getter<BrokerRepository>,
  ) {
    super(RealEstate, dataSource);
    this.brokers = this.createHasManyRepositoryFactoryFor('brokers', brokerRepositoryGetter,);
    this.registerInclusionResolver('brokers', this.brokers.inclusionResolver);
  }
}
