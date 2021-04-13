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
import {CommercialProperty} from '../models';
import {CommercialPropertyRepository} from '../repositories';

export class CommercialPropertyController {
  constructor(
    @repository(CommercialPropertyRepository)
    public commercialPropertyRepository : CommercialPropertyRepository,
  ) {}

  @post('/commercial-properties')
  @response(200, {
    description: 'CommercialProperty model instance',
    content: {'application/json': {schema: getModelSchemaRef(CommercialProperty)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommercialProperty, {
            title: 'NewCommercialProperty',
            exclude: ['id'],
          }),
        },
      },
    })
    commercialProperty: Omit<CommercialProperty, 'id'>,
  ): Promise<CommercialProperty> {
    return this.commercialPropertyRepository.create(commercialProperty);
  }

  @get('/commercial-properties/count')
  @response(200, {
    description: 'CommercialProperty model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CommercialProperty) where?: Where<CommercialProperty>,
  ): Promise<Count> {
    return this.commercialPropertyRepository.count(where);
  }

  @get('/commercial-properties')
  @response(200, {
    description: 'Array of CommercialProperty model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CommercialProperty, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CommercialProperty) filter?: Filter<CommercialProperty>,
  ): Promise<CommercialProperty[]> {
    return this.commercialPropertyRepository.find(filter);
  }

  @patch('/commercial-properties')
  @response(200, {
    description: 'CommercialProperty PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommercialProperty, {partial: true}),
        },
      },
    })
    commercialProperty: CommercialProperty,
    @param.where(CommercialProperty) where?: Where<CommercialProperty>,
  ): Promise<Count> {
    return this.commercialPropertyRepository.updateAll(commercialProperty, where);
  }

  @get('/commercial-properties/{id}')
  @response(200, {
    description: 'CommercialProperty model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CommercialProperty, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CommercialProperty, {exclude: 'where'}) filter?: FilterExcludingWhere<CommercialProperty>
  ): Promise<CommercialProperty> {
    return this.commercialPropertyRepository.findById(id, filter);
  }

  @patch('/commercial-properties/{id}')
  @response(204, {
    description: 'CommercialProperty PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommercialProperty, {partial: true}),
        },
      },
    })
    commercialProperty: CommercialProperty,
  ): Promise<void> {
    await this.commercialPropertyRepository.updateById(id, commercialProperty);
  }

  @put('/commercial-properties/{id}')
  @response(204, {
    description: 'CommercialProperty PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() commercialProperty: CommercialProperty,
  ): Promise<void> {
    await this.commercialPropertyRepository.replaceById(id, commercialProperty);
  }

  @del('/commercial-properties/{id}')
  @response(204, {
    description: 'CommercialProperty DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.commercialPropertyRepository.deleteById(id);
  }
}
