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
import {FurnishingStatusMaster} from '../models';
import {FurnishingStatusMasterRepository} from '../repositories';

export class FurnishingStatusMasterController {
  constructor(
    @repository(FurnishingStatusMasterRepository)
    public furnishingStatusMasterRepository : FurnishingStatusMasterRepository,
  ) {}

  @post('/furnishing-status-masters')
  @response(200, {
    description: 'FurnishingStatusMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(FurnishingStatusMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatusMaster, {
            title: 'NewFurnishingStatusMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    furnishingStatusMaster: Omit<FurnishingStatusMaster, 'id'>,
  ): Promise<FurnishingStatusMaster> {
    return this.furnishingStatusMasterRepository.create(furnishingStatusMaster);
  }

  @get('/furnishing-status-masters/count')
  @response(200, {
    description: 'FurnishingStatusMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FurnishingStatusMaster) where?: Where<FurnishingStatusMaster>,
  ): Promise<Count> {
    return this.furnishingStatusMasterRepository.count(where);
  }

  @get('/furnishing-status-masters')
  @response(200, {
    description: 'Array of FurnishingStatusMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FurnishingStatusMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FurnishingStatusMaster) filter?: Filter<FurnishingStatusMaster>,
  ): Promise<FurnishingStatusMaster[]> {
    return this.furnishingStatusMasterRepository.find(filter);
  }

  @patch('/furnishing-status-masters')
  @response(200, {
    description: 'FurnishingStatusMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatusMaster, {partial: true}),
        },
      },
    })
    furnishingStatusMaster: FurnishingStatusMaster,
    @param.where(FurnishingStatusMaster) where?: Where<FurnishingStatusMaster>,
  ): Promise<Count> {
    return this.furnishingStatusMasterRepository.updateAll(furnishingStatusMaster, where);
  }

  @get('/furnishing-status-masters/{id}')
  @response(200, {
    description: 'FurnishingStatusMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FurnishingStatusMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FurnishingStatusMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FurnishingStatusMaster>
  ): Promise<FurnishingStatusMaster> {
    return this.furnishingStatusMasterRepository.findById(id, filter);
  }

  @patch('/furnishing-status-masters/{id}')
  @response(204, {
    description: 'FurnishingStatusMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FurnishingStatusMaster, {partial: true}),
        },
      },
    })
    furnishingStatusMaster: FurnishingStatusMaster,
  ): Promise<void> {
    await this.furnishingStatusMasterRepository.updateById(id, furnishingStatusMaster);
  }

  @put('/furnishing-status-masters/{id}')
  @response(204, {
    description: 'FurnishingStatusMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() furnishingStatusMaster: FurnishingStatusMaster,
  ): Promise<void> {
    await this.furnishingStatusMasterRepository.replaceById(id, furnishingStatusMaster);
  }

  @del('/furnishing-status-masters/{id}')
  @response(204, {
    description: 'FurnishingStatusMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.furnishingStatusMasterRepository.deleteById(id);
  }
}
