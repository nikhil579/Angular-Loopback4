import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { Broker } from '../models';
import { BrokerRepository } from '../repositories';

export class BrokerController {
  constructor(
    @repository(BrokerRepository)
    public brokerRepository: BrokerRepository,
  ) { }

  @post('/brokers')
  @response(200, {
    description: 'Broker model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Broker) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, {
            title: 'NewBroker',
            exclude: ['id'],
          }),
        },
      },
    })
    broker: Omit<Broker, 'id'>,
  ): Promise<Broker> {
    return this.brokerRepository.create(broker);
  }

  @get('/brokers/count')
  @response(200, {
    description: 'Broker model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Broker) where?: Where<Broker>,
  ): Promise<Count> {
    return this.brokerRepository.count(where);
  }

  @get('/brokers')
  @response(200, {
    description: 'Array of Broker model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Broker, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Broker) filter?: Filter<Broker>,
  ): Promise<Broker[]> {
    return this.brokerRepository.find(filter);
  }

  @patch('/brokers')
  @response(200, {
    description: 'Broker PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, { partial: true }),
        },
      },
    })
    broker: Broker,
    @param.where(Broker) where?: Where<Broker>,
  ): Promise<Count> {
    return this.brokerRepository.updateAll(broker, where);
  }

  @get('/brokers/{id}')
  @response(200, {
    description: 'Broker model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Broker, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Broker, { exclude: 'where' }) filter?: FilterExcludingWhere<Broker>
  ): Promise<Broker> {
    return this.brokerRepository.findById(id, filter);
  }

  @patch('/brokers/{id}')
  @response(204, {
    description: 'Broker PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Broker, { partial: true }),
        },
      },
    })
    broker: Broker,
  ): Promise<void> {
    await this.brokerRepository.updateById(id, broker);
  }

  @put('/brokers/{id}')
  @response(204, {
    description: 'Broker PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() broker: Broker,
  ): Promise<void> {
    await this.brokerRepository.replaceById(id, broker);
  }

  @del('/brokers/{id}')
  @response(204, {
    description: 'Broker DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.brokerRepository.deleteById(id);
  }
}
