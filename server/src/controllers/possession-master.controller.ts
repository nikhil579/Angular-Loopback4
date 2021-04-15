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
import { Possession } from '../models';
import { PossessionRepository } from '../repositories';

export class PossessionController {
  constructor(
    @repository(PossessionRepository)
    public possessionRepository: PossessionRepository,
  ) { }

  @post('/possession-master')
  @response(200, {
    description: 'Possession model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Possession) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Possession, {
            title: 'NewPossession',
            exclude: ['id'],
          }),
        },
      },
    })
    possession: Omit<Possession, 'id'>,
  ): Promise<Possession> {
    return this.possessionRepository.create(possession);
  }

  @get('/possession-master/count')
  @response(200, {
    description: 'Possession model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Possession) where?: Where<Possession>,
  ): Promise<Count> {
    return this.possessionRepository.count(where);
  }

  @get('/possession-master')
  @response(200, {
    description: 'Array of Possession model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Possession, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Possession) filter?: Filter<Possession>,
  ): Promise<Possession[]> {
    return this.possessionRepository.find(filter);
  }

  @patch('/possession-master')
  @response(200, {
    description: 'Possession PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Possession, { partial: true }),
        },
      },
    })
    possession: Possession,
    @param.where(Possession) where?: Where<Possession>,
  ): Promise<Count> {
    return this.possessionRepository.updateAll(possession, where);
  }

  @get('/possession-master/{id}')
  @response(200, {
    description: 'Possession model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Possession, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Possession, { exclude: 'where' }) filter?: FilterExcludingWhere<Possession>
  ): Promise<Possession> {
    return this.possessionRepository.findById(id, filter);
  }

  @patch('/possession-master/{id}')
  @response(204, {
    description: 'Possession PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Possession, { partial: true }),
        },
      },
    })
    possession: Possession,
  ): Promise<void> {
    await this.possessionRepository.updateById(id, possession);
  }

  @put('/possession-master/{id}')
  @response(204, {
    description: 'Possession PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() possession: Possession,
  ): Promise<void> {
    await this.possessionRepository.replaceById(id, possession);
  }

  @del('/possession-master/{id}')
  @response(204, {
    description: 'Possession DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.possessionRepository.deleteById(id);
  }
}
