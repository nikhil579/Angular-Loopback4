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
  RealEstate,
  Broker,
} from '../models';
import {RealEstateRepository} from '../repositories';

export class RealEstateBrokerController {
  constructor(
    @repository(RealEstateRepository) protected realEstateRepository: RealEstateRepository,
  ) { }

  @get('/real-estates/{id}/brokers', {
    responses: {
      '200': {
        description: 'Array of RealEstate has many Broker',
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
    return this.realEstateRepository.brokers(id).find(filter);
  }

  @post('/real-estates/{id}/brokers', {
    responses: {
      '200': {
        description: 'RealEstate model instance',
        content: {'application/json': {schema: getModelSchemaRef(Broker)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof RealEstate.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, {
            title: 'NewBrokerInRealEstate',
            exclude: ['id'],
            optional: ['realEstateId']
          }),
        },
      },
    }) broker: Omit<Broker, 'id'>,
  ): Promise<Broker> {
    return this.realEstateRepository.brokers(id).create(broker);
  }

  @patch('/real-estates/{id}/brokers', {
    responses: {
      '200': {
        description: 'RealEstate.Broker PATCH success count',
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
    return this.realEstateRepository.brokers(id).patch(broker, where);
  }

  @del('/real-estates/{id}/brokers', {
    responses: {
      '200': {
        description: 'RealEstate.Broker DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Broker)) where?: Where<Broker>,
  ): Promise<Count> {
    return this.realEstateRepository.brokers(id).delete(where);
  }
}
