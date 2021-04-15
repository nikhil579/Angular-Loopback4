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
import { FurnishingStatus } from '../models';
import { FurnishingStatusRepository } from '../repositories';

export class FurnishingStatusController {
  constructor(
    @repository(FurnishingStatusRepository)
    public furnishingStatusRepository: FurnishingStatusRepository,
  ) { }

  @post('/furnishing-status-master')
  @response(200, {
    description: 'FurnishingStatus model instance',
    content: { 'application/json': { schema: getModelSchemaRef(FurnishingStatus) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatus, {
            title: 'NewFurnishingStatus',
            exclude: ['id'],
          }),
        },
      },
    })
    furnishingStatus: Omit<FurnishingStatus, 'id'>,
  ): Promise<FurnishingStatus> {
    return this.furnishingStatusRepository.create(furnishingStatus);
  }

  @get('/furnishing-status-master/count')
  @response(200, {
    description: 'FurnishingStatus model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(FurnishingStatus) where?: Where<FurnishingStatus>,
  ): Promise<Count> {
    return this.furnishingStatusRepository.count(where);
  }

  @get('/furnishing-status-master')
  @response(200, {
    description: 'Array of FurnishingStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FurnishingStatus, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(FurnishingStatus) filter?: Filter<FurnishingStatus>,
  ): Promise<FurnishingStatus[]> {
    return this.furnishingStatusRepository.find(filter);
  }

  @patch('/furnishing-status-master')
  @response(200, {
    description: 'FurnishingStatus PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatus, { partial: true }),
        },
      },
    })
    furnishingStatus: FurnishingStatus,
    @param.where(FurnishingStatus) where?: Where<FurnishingStatus>,
  ): Promise<Count> {
    return this.furnishingStatusRepository.updateAll(furnishingStatus, where);
  }

  @get('/furnishing-status-master/{id}')
  @response(200, {
    description: 'FurnishingStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FurnishingStatus, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FurnishingStatus, { exclude: 'where' }) filter?: FilterExcludingWhere<FurnishingStatus>
  ): Promise<FurnishingStatus> {
    return this.furnishingStatusRepository.findById(id, filter);
  }

  @patch('/furnishing-status-master/{id}')
  @response(204, {
    description: 'FurnishingStatus PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatus, { partial: true }),
        },
      },
    })
    furnishingStatus: FurnishingStatus,
  ): Promise<void> {
    await this.furnishingStatusRepository.updateById(id, furnishingStatus);
  }

  @put('/furnishing-status-master/{id}')
  @response(204, {
    description: 'FurnishingStatus PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() furnishingStatus: FurnishingStatus,
  ): Promise<void> {
    await this.furnishingStatusRepository.replaceById(id, furnishingStatus);
  }

  @del('/furnishing-status-master/{id}')
  @response(204, {
    description: 'FurnishingStatus DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.furnishingStatusRepository.deleteById(id);
  }
}
