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
import { Purpose } from '../models';
import { PurposeRepository } from '../repositories';

export class PurposeController {
  constructor(
    @repository(PurposeRepository)
    public purposeRepository: PurposeRepository,
  ) { }

  @post('/purpose-master')
  @response(200, {
    description: 'Purpose model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Purpose) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Purpose, {
            title: 'NewPurpose',
            exclude: ['id'],
          }),
        },
      },
    })
    purpose: Omit<Purpose, 'id'>,
  ): Promise<Purpose> {
    return this.purposeRepository.create(purpose);
  }

  @get('/purpose-master/count')
  @response(200, {
    description: 'Purpose model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Purpose) where?: Where<Purpose>,
  ): Promise<Count> {
    return this.purposeRepository.count(where);
  }

  @get('/purpose-master')
  @response(200, {
    description: 'Array of Purpose model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Purpose, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Purpose) filter?: Filter<Purpose>,
  ): Promise<Purpose[]> {
    return this.purposeRepository.find(filter);
  }

  @patch('/purpose-master')
  @response(200, {
    description: 'Purpose PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Purpose, { partial: true }),
        },
      },
    })
    purpose: Purpose,
    @param.where(Purpose) where?: Where<Purpose>,
  ): Promise<Count> {
    return this.purposeRepository.updateAll(purpose, where);
  }

  @get('/purpose-master/{id}')
  @response(200, {
    description: 'Purpose model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Purpose, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Purpose, { exclude: 'where' }) filter?: FilterExcludingWhere<Purpose>
  ): Promise<Purpose> {
    return this.purposeRepository.findById(id, filter);
  }

  @patch('/purpose-master/{id}')
  @response(204, {
    description: 'Purpose PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Purpose, { partial: true }),
        },
      },
    })
    purpose: Purpose,
  ): Promise<void> {
    await this.purposeRepository.updateById(id, purpose);
  }

  @put('/purpose-master/{id}')
  @response(204, {
    description: 'Purpose PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() purpose: Purpose,
  ): Promise<void> {
    await this.purposeRepository.replaceById(id, purpose);
  }

  @del('/purpose-master/{id}')
  @response(204, {
    description: 'Purpose DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.purposeRepository.deleteById(id);
  }
}
