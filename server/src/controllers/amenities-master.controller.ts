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
import {AmenitiesMaster} from '../models';
import {AmenitiesMasterRepository} from '../repositories';

export class AmenitiesMasterController {
  constructor(
    @repository(AmenitiesMasterRepository)
    public amenitiesMasterRepository : AmenitiesMasterRepository,
  ) {}

  @post('/amenities-masters')
  @response(200, {
    description: 'AmenitiesMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(AmenitiesMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AmenitiesMaster, {
            title: 'NewAmenitiesMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    amenitiesMaster: Omit<AmenitiesMaster, 'id'>,
  ): Promise<AmenitiesMaster> {
    return this.amenitiesMasterRepository.create(amenitiesMaster);
  }

  @get('/amenities-masters/count')
  @response(200, {
    description: 'AmenitiesMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AmenitiesMaster) where?: Where<AmenitiesMaster>,
  ): Promise<Count> {
    return this.amenitiesMasterRepository.count(where);
  }

  @get('/amenities-masters')
  @response(200, {
    description: 'Array of AmenitiesMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AmenitiesMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AmenitiesMaster) filter?: Filter<AmenitiesMaster>,
  ): Promise<AmenitiesMaster[]> {
    return this.amenitiesMasterRepository.find(filter);
  }

  @patch('/amenities-masters')
  @response(200, {
    description: 'AmenitiesMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AmenitiesMaster, {partial: true}),
        },
      },
    })
    amenitiesMaster: AmenitiesMaster,
    @param.where(AmenitiesMaster) where?: Where<AmenitiesMaster>,
  ): Promise<Count> {
    return this.amenitiesMasterRepository.updateAll(amenitiesMaster, where);
  }

  @get('/amenities-masters/{id}')
  @response(200, {
    description: 'AmenitiesMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AmenitiesMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AmenitiesMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<AmenitiesMaster>
  ): Promise<AmenitiesMaster> {
    return this.amenitiesMasterRepository.findById(id, filter);
  }

  @patch('/amenities-masters/{id}')
  @response(204, {
    description: 'AmenitiesMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AmenitiesMaster, {partial: true}),
        },
      },
    })
    amenitiesMaster: AmenitiesMaster,
  ): Promise<void> {
    await this.amenitiesMasterRepository.updateById(id, amenitiesMaster);
  }

  @put('/amenities-masters/{id}')
  @response(204, {
    description: 'AmenitiesMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() amenitiesMaster: AmenitiesMaster,
  ): Promise<void> {
    await this.amenitiesMasterRepository.replaceById(id, amenitiesMaster);
  }

  @del('/amenities-masters/{id}')
  @response(204, {
    description: 'AmenitiesMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.amenitiesMasterRepository.deleteById(id);
  }
}
