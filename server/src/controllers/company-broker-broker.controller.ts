import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  CompanyBroker,
  Broker,
} from '../models';
import {CompanyBrokerRepository} from '../repositories';

export class CompanyBrokerBrokerController {
  constructor(
    @repository(CompanyBrokerRepository) protected companyBrokerRepository: CompanyBrokerRepository,
  ) { }

  @get('/company-brokers/{id}/brokers', {
    responses: {
      '200': {
        description: 'Array of CompanyBroker has many Broker',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Broker)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Broker>,
  ): Promise<Broker[]> {
    return this.companyBrokerRepository.brokers(id).find(filter);
  }

  @post('/company-brokers/{id}/brokers', {
    responses: {
      '200': {
        description: 'CompanyBroker model instance',
        content: {'application/json': {schema: getModelSchemaRef(Broker)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof CompanyBroker.prototype.company,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, {
            title: 'NewBrokerInCompanyBroker',
            exclude: ['email'],
            optional: ['companyName']
          }),
        },
      },
    }) broker: Omit<Broker, 'email'>,
  ): Promise<Broker> {
    return this.companyBrokerRepository.brokers(id).create(broker);
  }

  @patch('/company-brokers/{id}/brokers', {
    responses: {
      '200': {
        description: 'CompanyBroker.Broker PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, {partial: true}),
        },
      },
    })
    broker: Partial<Broker>,
    @param.query.object('where', getWhereSchemaFor(Broker)) where?: Where<Broker>,
  ): Promise<Count> {
    return this.companyBrokerRepository.brokers(id).patch(broker, where);
  }

  @del('/company-brokers/{id}/brokers', {
    responses: {
      '200': {
        description: 'CompanyBroker.Broker DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Broker)) where?: Where<Broker>,
  ): Promise<Count> {
    return this.companyBrokerRepository.brokers(id).delete(where);
  }
}
