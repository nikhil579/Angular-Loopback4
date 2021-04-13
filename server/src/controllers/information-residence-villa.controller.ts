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
import {InformationResidenceVilla} from '../models';
import {InformationResidenceVillaRepository} from '../repositories';

export class InformationResidenceVillaController {
  constructor(
    @repository(InformationResidenceVillaRepository)
    public informationResidenceVillaRepository : InformationResidenceVillaRepository,
  ) {}

  @post('/information-residence-villas')
  @response(200, {
    description: 'InformationResidenceVilla model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformationResidenceVilla)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceVilla, {
            title: 'NewInformationResidenceVilla',
            exclude: ['id'],
          }),
        },
      },
    })
    informationResidenceVilla: Omit<InformationResidenceVilla, 'id'>,
  ): Promise<InformationResidenceVilla> {
    return this.informationResidenceVillaRepository.create(informationResidenceVilla);
  }

  @get('/information-residence-villas/count')
  @response(200, {
    description: 'InformationResidenceVilla model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformationResidenceVilla) where?: Where<InformationResidenceVilla>,
  ): Promise<Count> {
    return this.informationResidenceVillaRepository.count(where);
  }

  @get('/information-residence-villas')
  @response(200, {
    description: 'Array of InformationResidenceVilla model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformationResidenceVilla, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformationResidenceVilla) filter?: Filter<InformationResidenceVilla>,
  ): Promise<InformationResidenceVilla[]> {
    return this.informationResidenceVillaRepository.find(filter);
  }

  @patch('/information-residence-villas')
  @response(200, {
    description: 'InformationResidenceVilla PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceVilla, {partial: true}),
        },
      },
    })
    informationResidenceVilla: InformationResidenceVilla,
    @param.where(InformationResidenceVilla) where?: Where<InformationResidenceVilla>,
  ): Promise<Count> {
    return this.informationResidenceVillaRepository.updateAll(informationResidenceVilla, where);
  }

  @get('/information-residence-villas/{id}')
  @response(200, {
    description: 'InformationResidenceVilla model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformationResidenceVilla, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InformationResidenceVilla, {exclude: 'where'}) filter?: FilterExcludingWhere<InformationResidenceVilla>
  ): Promise<InformationResidenceVilla> {
    return this.informationResidenceVillaRepository.findById(id, filter);
  }

  @patch('/information-residence-villas/{id}')
  @response(204, {
    description: 'InformationResidenceVilla PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceVilla, {partial: true}),
        },
      },
    })
    informationResidenceVilla: InformationResidenceVilla,
  ): Promise<void> {
    await this.informationResidenceVillaRepository.updateById(id, informationResidenceVilla);
  }

  @put('/information-residence-villas/{id}')
  @response(204, {
    description: 'InformationResidenceVilla PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() informationResidenceVilla: InformationResidenceVilla,
  ): Promise<void> {
    await this.informationResidenceVillaRepository.replaceById(id, informationResidenceVilla);
  }

  @del('/information-residence-villas/{id}')
  @response(204, {
    description: 'InformationResidenceVilla DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.informationResidenceVillaRepository.deleteById(id);
  }
}
