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
import { CurrentResidenceMaster } from '../models';
import { CurrentResidenceMasterRepository } from '../repositories';

export class CurrentResidenceMasterController {
  constructor(
    @repository(CurrentResidenceMasterRepository)
    public currentResidenceMasterRepository: CurrentResidenceMasterRepository,
  ) { }

  @post('/current-residence-masters')
  @response(200, {
    description: 'CurrentResidenceMaster model instance',
    content: { 'application/json': { schema: getModelSchemaRef(CurrentResidenceMaster) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidenceMaster, {
            title: 'NewCurrentResidenceMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    currentResidenceMaster: Omit<CurrentResidenceMaster, 'id'>,
  ): Promise<CurrentResidenceMaster> {
    return this.currentResidenceMasterRepository.create(currentResidenceMaster);
  }

  @get('/current-residence-masters/count')
  @response(200, {
    description: 'CurrentResidenceMaster model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(CurrentResidenceMaster) where?: Where<CurrentResidenceMaster>,
  ): Promise<Count> {
    return this.currentResidenceMasterRepository.count(where);
  }

  @get('/current-residence-masters')
  @response(200, {
    description: 'Array of CurrentResidenceMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CurrentResidenceMaster, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(CurrentResidenceMaster) filter?: Filter<CurrentResidenceMaster>,
  ): Promise<CurrentResidenceMaster[]> {
    return this.currentResidenceMasterRepository.find(filter);
  }

  @patch('/current-residence-masters')
  @response(200, {
    description: 'CurrentResidenceMaster PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidenceMaster, { partial: true }),
        },
      },
    })
    currentResidenceMaster: CurrentResidenceMaster,
    @param.where(CurrentResidenceMaster) where?: Where<CurrentResidenceMaster>,
  ): Promise<Count> {
    return this.currentResidenceMasterRepository.updateAll(currentResidenceMaster, where);
  }

  @get('/current-residence-masters/{id}')
  @response(200, {
    description: 'CurrentResidenceMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CurrentResidenceMaster, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CurrentResidenceMaster, { exclude: 'where' }) filter?: FilterExcludingWhere<CurrentResidenceMaster>
  ): Promise<CurrentResidenceMaster> {
    return this.currentResidenceMasterRepository.findById(id, filter);
  }

  @patch('/current-residence-masters/{id}')
  @response(204, {
    description: 'CurrentResidenceMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidenceMaster, { partial: true }),
        },
      },
    })
    currentResidenceMaster: CurrentResidenceMaster,
  ): Promise<void> {
    await this.currentResidenceMasterRepository.updateById(id, currentResidenceMaster);
  }

  @put('/current-residence-masters/{id}')
  @response(204, {
    description: 'CurrentResidenceMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() currentResidenceMaster: CurrentResidenceMaster,
  ): Promise<void> {
    await this.currentResidenceMasterRepository.replaceById(id, currentResidenceMaster);
  }

  @del('/current-residence-masters/{id}')
  @response(204, {
    description: 'CurrentResidenceMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.currentResidenceMasterRepository.deleteById(id);
  }
}
