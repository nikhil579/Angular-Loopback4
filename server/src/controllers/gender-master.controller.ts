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
import { Gender } from '../models';
import { GenderRepository } from '../repositories';

export class GenderController {
  constructor(
    @repository(GenderRepository)
    public genderRepository: GenderRepository,
  ) { }

  @post('/gender-master')
  @response(200, {
    description: 'Gender model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Gender) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, {
            title: 'NewGender',
            exclude: ['id'],
          }),
        },
      },
    })
    gender: Omit<Gender, 'id'>,
  ): Promise<Gender> {
    return this.genderRepository.create(gender);
  }

  @get('/gender-master/count')
  @response(200, {
    description: 'Gender model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Gender) where?: Where<Gender>,
  ): Promise<Count> {
    return this.genderRepository.count(where);
  }

  @get('/gender-master')
  @response(200, {
    description: 'Array of Gender model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gender, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Gender) filter?: Filter<Gender>,
  ): Promise<Gender[]> {
    return this.genderRepository.find(filter);
  }

  @patch('/gender-master')
  @response(200, {
    description: 'Gender PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, { partial: true }),
        },
      },
    })
    gender: Gender,
    @param.where(Gender) where?: Where<Gender>,
  ): Promise<Count> {
    return this.genderRepository.updateAll(gender, where);
  }

  @get('/gender-master/{id}')
  @response(200, {
    description: 'Gender model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gender, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Gender, { exclude: 'where' }) filter?: FilterExcludingWhere<Gender>
  ): Promise<Gender> {
    return this.genderRepository.findById(id, filter);
  }

  @patch('/gender-master/{id}')
  @response(204, {
    description: 'Gender PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gender, { partial: true }),
        },
      },
    })
    gender: Gender,
  ): Promise<void> {
    await this.genderRepository.updateById(id, gender);
  }

  @put('/gender-master/{id}')
  @response(204, {
    description: 'Gender PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() gender: Gender,
  ): Promise<void> {
    await this.genderRepository.replaceById(id, gender);
  }

  @del('/gender-master/{id}')
  @response(204, {
    description: 'Gender DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.genderRepository.deleteById(id);
  }
}
