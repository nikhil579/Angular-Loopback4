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
import { CurrentResidence } from '../models';
import { CurrentResidenceRepository } from '../repositories';

export class CurrentResidenceController {
  constructor(
    @repository(CurrentResidenceRepository)
    public currentResidenceRepository: CurrentResidenceRepository,
  ) { }

  @post('/current-residence-master')
  @response(200, {
    description: 'CurrentResidence model instance',
    content: { 'application/json': { schema: getModelSchemaRef(CurrentResidence) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidence, {
            title: 'NewCurrentResidence',
            exclude: ['id'],
          }),
        },
      },
    })
    currentResidence: Omit<CurrentResidence, 'id'>,
  ): Promise<CurrentResidence> {
    return this.currentResidenceRepository.create(currentResidence);
  }

  @get('/current-residence-master/count')
  @response(200, {
    description: 'CurrentResidence model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(CurrentResidence) where?: Where<CurrentResidence>,
  ): Promise<Count> {
    return this.currentResidenceRepository.count(where);
  }

  @get('/current-residence-master')
  @response(200, {
    description: 'Array of CurrentResidence model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CurrentResidence, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(CurrentResidence) filter?: Filter<CurrentResidence>,
  ): Promise<CurrentResidence[]> {
    return this.currentResidenceRepository.find(filter);
  }

  @patch('/current-residence-master')
  @response(200, {
    description: 'CurrentResidence PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidence, { partial: true }),
        },
      },
    })
    currentResidence: CurrentResidence,
    @param.where(CurrentResidence) where?: Where<CurrentResidence>,
  ): Promise<Count> {
    return this.currentResidenceRepository.updateAll(currentResidence, where);
  }

  @get('/current-residence-master/{id}')
  @response(200, {
    description: 'CurrentResidence model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CurrentResidence, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CurrentResidence, { exclude: 'where' }) filter?: FilterExcludingWhere<CurrentResidence>
  ): Promise<CurrentResidence> {
    return this.currentResidenceRepository.findById(id, filter);
  }

  @patch('/current-residence-master/{id}')
  @response(204, {
    description: 'CurrentResidence PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentResidence, { partial: true }),
        },
      },
    })
    currentResidence: CurrentResidence,
  ): Promise<void> {
    await this.currentResidenceRepository.updateById(id, currentResidence);
  }

  @put('/current-residence-master/{id}')
  @response(204, {
    description: 'CurrentResidence PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() currentResidence: CurrentResidence,
  ): Promise<void> {
    await this.currentResidenceRepository.replaceById(id, currentResidence);
  }

  @del('/current-residence-master/{id}')
  @response(204, {
    description: 'CurrentResidence DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.currentResidenceRepository.deleteById(id);
  }
}
