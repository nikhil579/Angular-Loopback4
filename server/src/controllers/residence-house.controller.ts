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
import {ResidenceHouse} from '../models';
import {ResidenceHouseRepository} from '../repositories';

export class ResidenceHouseController {
  constructor(
    @repository(ResidenceHouseRepository)
    public residenceHouseRepository : ResidenceHouseRepository,
  ) {}

  @post('/residence-houses')
  @response(200, {
    description: 'ResidenceHouse model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResidenceHouse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceHouse, {
            title: 'NewResidenceHouse',
            exclude: ['id'],
          }),
        },
      },
    })
    residenceHouse: Omit<ResidenceHouse, 'id'>,
  ): Promise<ResidenceHouse> {
    return this.residenceHouseRepository.create(residenceHouse);
  }

  @get('/residence-houses/count')
  @response(200, {
    description: 'ResidenceHouse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResidenceHouse) where?: Where<ResidenceHouse>,
  ): Promise<Count> {
    return this.residenceHouseRepository.count(where);
  }

  @get('/residence-houses')
  @response(200, {
    description: 'Array of ResidenceHouse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResidenceHouse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResidenceHouse) filter?: Filter<ResidenceHouse>,
  ): Promise<ResidenceHouse[]> {
    return this.residenceHouseRepository.find(filter);
  }

  @patch('/residence-houses')
  @response(200, {
    description: 'ResidenceHouse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceHouse, {partial: true}),
        },
      },
    })
    residenceHouse: ResidenceHouse,
    @param.where(ResidenceHouse) where?: Where<ResidenceHouse>,
  ): Promise<Count> {
    return this.residenceHouseRepository.updateAll(residenceHouse, where);
  }

  @get('/residence-houses/{id}')
  @response(200, {
    description: 'ResidenceHouse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResidenceHouse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResidenceHouse, {exclude: 'where'}) filter?: FilterExcludingWhere<ResidenceHouse>
  ): Promise<ResidenceHouse> {
    return this.residenceHouseRepository.findById(id, filter);
  }

  @patch('/residence-houses/{id}')
  @response(204, {
    description: 'ResidenceHouse PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceHouse, {partial: true}),
        },
      },
    })
    residenceHouse: ResidenceHouse,
  ): Promise<void> {
    await this.residenceHouseRepository.updateById(id, residenceHouse);
  }

  @put('/residence-houses/{id}')
  @response(204, {
    description: 'ResidenceHouse PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() residenceHouse: ResidenceHouse,
  ): Promise<void> {
    await this.residenceHouseRepository.replaceById(id, residenceHouse);
  }

  @del('/residence-houses/{id}')
  @response(204, {
    description: 'ResidenceHouse DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.residenceHouseRepository.deleteById(id);
  }
}
