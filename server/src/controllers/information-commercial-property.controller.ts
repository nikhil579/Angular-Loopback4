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
import {InformationCommercialProperty} from '../models';
import {InformationCommercialPropertyRepository} from '../repositories';

export class InformationCommercialPropertyController {
  constructor(
    @repository(InformationCommercialPropertyRepository)
    public informationCommercialPropertyRepository : InformationCommercialPropertyRepository,
  ) {}

  @post('/information-commercial-properties')
  @response(200, {
    description: 'InformationCommercialProperty model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformationCommercialProperty)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationCommercialProperty, {
            title: 'NewInformationCommercialProperty',
            exclude: ['id'],
          }),
        },
      },
    })
    informationCommercialProperty: Omit<InformationCommercialProperty, 'id'>,
  ): Promise<InformationCommercialProperty> {
    return this.informationCommercialPropertyRepository.create(informationCommercialProperty);
  }

  @get('/information-commercial-properties/count')
  @response(200, {
    description: 'InformationCommercialProperty model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformationCommercialProperty) where?: Where<InformationCommercialProperty>,
  ): Promise<Count> {
    return this.informationCommercialPropertyRepository.count(where);
  }

  @get('/information-commercial-properties')
  @response(200, {
    description: 'Array of InformationCommercialProperty model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformationCommercialProperty, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformationCommercialProperty) filter?: Filter<InformationCommercialProperty>,
  ): Promise<InformationCommercialProperty[]> {
    return this.informationCommercialPropertyRepository.find(filter);
  }

  @patch('/information-commercial-properties')
  @response(200, {
    description: 'InformationCommercialProperty PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationCommercialProperty, {partial: true}),
        },
      },
    })
    informationCommercialProperty: InformationCommercialProperty,
    @param.where(InformationCommercialProperty) where?: Where<InformationCommercialProperty>,
  ): Promise<Count> {
    return this.informationCommercialPropertyRepository.updateAll(informationCommercialProperty, where);
  }

  @get('/information-commercial-properties/{id}')
  @response(200, {
    description: 'InformationCommercialProperty model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformationCommercialProperty, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InformationCommercialProperty, {exclude: 'where'}) filter?: FilterExcludingWhere<InformationCommercialProperty>
  ): Promise<InformationCommercialProperty> {
    return this.informationCommercialPropertyRepository.findById(id, filter);
  }

  @patch('/information-commercial-properties/{id}')
  @response(204, {
    description: 'InformationCommercialProperty PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationCommercialProperty, {partial: true}),
        },
      },
    })
    informationCommercialProperty: InformationCommercialProperty,
  ): Promise<void> {
    await this.informationCommercialPropertyRepository.updateById(id, informationCommercialProperty);
  }

  @put('/information-commercial-properties/{id}')
  @response(204, {
    description: 'InformationCommercialProperty PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() informationCommercialProperty: InformationCommercialProperty,
  ): Promise<void> {
    await this.informationCommercialPropertyRepository.replaceById(id, informationCommercialProperty);
  }

  @del('/information-commercial-properties/{id}')
  @response(204, {
    description: 'InformationCommercialProperty DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.informationCommercialPropertyRepository.deleteById(id);
  }
}
