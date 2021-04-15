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
import { ResidenceType } from '../models';
import { ResidenceTypeRepository } from '../repositories';

export class ResidenceTypeController {
  constructor(
    @repository(ResidenceTypeRepository)
    public residenceTypeRepository: ResidenceTypeRepository,
  ) { }

  @post('/residence-type-master')
  @response(200, {
    description: 'ResidenceType model instance',
    content: { 'application/json': { schema: getModelSchemaRef(ResidenceType) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceType, {
            title: 'NewResidenceType',
            exclude: ['id'],
          }),
        },
      },
    })
    residenceType: Omit<ResidenceType, 'id'>,
  ): Promise<ResidenceType> {
    return this.residenceTypeRepository.create(residenceType);
  }

  @get('/residence-type-master/count')
  @response(200, {
    description: 'ResidenceType model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(ResidenceType) where?: Where<ResidenceType>,
  ): Promise<Count> {
    return this.residenceTypeRepository.count(where);
  }

  @get('/residence-type-master')
  @response(200, {
    description: 'Array of ResidenceType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResidenceType, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(ResidenceType) filter?: Filter<ResidenceType>,
  ): Promise<ResidenceType[]> {
    return this.residenceTypeRepository.find(filter);
  }

  @patch('/residence-type-master')
  @response(200, {
    description: 'ResidenceType PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceType, { partial: true }),
        },
      },
    })
    residenceType: ResidenceType,
    @param.where(ResidenceType) where?: Where<ResidenceType>,
  ): Promise<Count> {
    return this.residenceTypeRepository.updateAll(residenceType, where);
  }

  @get('/residence-type-master/{id}')
  @response(200, {
    description: 'ResidenceType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResidenceType, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResidenceType, { exclude: 'where' }) filter?: FilterExcludingWhere<ResidenceType>
  ): Promise<ResidenceType> {
    return this.residenceTypeRepository.findById(id, filter);
  }

  @patch('/residence-type-master/{id}')
  @response(204, {
    description: 'ResidenceType PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceType, { partial: true }),
        },
      },
    })
    residenceType: ResidenceType,
  ): Promise<void> {
    await this.residenceTypeRepository.updateById(id, residenceType);
  }

  @put('/residence-type-master/{id}')
  @response(204, {
    description: 'ResidenceType PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() residenceType: ResidenceType,
  ): Promise<void> {
    await this.residenceTypeRepository.replaceById(id, residenceType);
  }

  @del('/residence-type-master/{id}')
  @response(204, {
    description: 'ResidenceType DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.residenceTypeRepository.deleteById(id);
  }
}
