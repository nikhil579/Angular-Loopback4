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
import {ResidenceVilla} from '../models';
import {ResidenceVillaRepository} from '../repositories';

export class ResidenceVillaController {
  constructor(
    @repository(ResidenceVillaRepository)
    public residenceVillaRepository : ResidenceVillaRepository,
  ) {}

  @post('/residence-villas')
  @response(200, {
    description: 'ResidenceVilla model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResidenceVilla)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceVilla, {
            title: 'NewResidenceVilla',
            exclude: ['id'],
          }),
        },
      },
    })
    residenceVilla: Omit<ResidenceVilla, 'id'>,
  ): Promise<ResidenceVilla> {
    return this.residenceVillaRepository.create(residenceVilla);
  }

  @get('/residence-villas/count')
  @response(200, {
    description: 'ResidenceVilla model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResidenceVilla) where?: Where<ResidenceVilla>,
  ): Promise<Count> {
    return this.residenceVillaRepository.count(where);
  }

  @get('/residence-villas')
  @response(200, {
    description: 'Array of ResidenceVilla model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResidenceVilla, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResidenceVilla) filter?: Filter<ResidenceVilla>,
  ): Promise<ResidenceVilla[]> {
    return this.residenceVillaRepository.find(filter);
  }

  @patch('/residence-villas')
  @response(200, {
    description: 'ResidenceVilla PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceVilla, {partial: true}),
        },
      },
    })
    residenceVilla: ResidenceVilla,
    @param.where(ResidenceVilla) where?: Where<ResidenceVilla>,
  ): Promise<Count> {
    return this.residenceVillaRepository.updateAll(residenceVilla, where);
  }

  @get('/residence-villas/{id}')
  @response(200, {
    description: 'ResidenceVilla model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResidenceVilla, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResidenceVilla, {exclude: 'where'}) filter?: FilterExcludingWhere<ResidenceVilla>
  ): Promise<ResidenceVilla> {
    return this.residenceVillaRepository.findById(id, filter);
  }

  @patch('/residence-villas/{id}')
  @response(204, {
    description: 'ResidenceVilla PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceVilla, {partial: true}),
        },
      },
    })
    residenceVilla: ResidenceVilla,
  ): Promise<void> {
    await this.residenceVillaRepository.updateById(id, residenceVilla);
  }

  @put('/residence-villas/{id}')
  @response(204, {
    description: 'ResidenceVilla PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() residenceVilla: ResidenceVilla,
  ): Promise<void> {
    await this.residenceVillaRepository.replaceById(id, residenceVilla);
  }

  @del('/residence-villas/{id}')
  @response(204, {
    description: 'ResidenceVilla DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.residenceVillaRepository.deleteById(id);
  }
}
