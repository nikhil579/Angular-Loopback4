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
import { Occupation } from '../models';
import { OccupationRepository } from '../repositories';

export class OccupationController {
  constructor(
    @repository(OccupationRepository)
    public occupationRepository: OccupationRepository,
  ) { }

  @post('/occupation-master')
  @response(200, {
    description: 'Occupation model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Occupation) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Occupation, {
            title: 'NewOccupation',
            exclude: ['id'],
          }),
        },
      },
    })
    occupation: Omit<Occupation, 'id'>,
  ): Promise<Occupation> {
    return this.occupationRepository.create(occupation);
  }

  @get('/occupation-master/count')
  @response(200, {
    description: 'Occupation model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Occupation) where?: Where<Occupation>,
  ): Promise<Count> {
    return this.occupationRepository.count(where);
  }

  @get('/occupation-master')
  @response(200, {
    description: 'Array of Occupation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Occupation, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Occupation) filter?: Filter<Occupation>,
  ): Promise<Occupation[]> {
    return this.occupationRepository.find(filter);
  }

  @patch('/occupation-master')
  @response(200, {
    description: 'Occupation PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Occupation, { partial: true }),
        },
      },
    })
    occupation: Occupation,
    @param.where(Occupation) where?: Where<Occupation>,
  ): Promise<Count> {
    return this.occupationRepository.updateAll(occupation, where);
  }

  @get('/occupation-master/{id}')
  @response(200, {
    description: 'Occupation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Occupation, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Occupation, { exclude: 'where' }) filter?: FilterExcludingWhere<Occupation>
  ): Promise<Occupation> {
    return this.occupationRepository.findById(id, filter);
  }

  @patch('/occupation-master/{id}')
  @response(204, {
    description: 'Occupation PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Occupation, { partial: true }),
        },
      },
    })
    occupation: Occupation,
  ): Promise<void> {
    await this.occupationRepository.updateById(id, occupation);
  }

  @put('/occupation-master/{id}')
  @response(204, {
    description: 'Occupation PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() occupation: Occupation,
  ): Promise<void> {
    await this.occupationRepository.replaceById(id, occupation);
  }

  @del('/occupation-master/{id}')
  @response(204, {
    description: 'Occupation DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.occupationRepository.deleteById(id);
  }
}
