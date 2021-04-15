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
import { UnitLayout } from '../models';
import { UnitLayoutRepository } from '../repositories';

export class UnitLayoutController {
  constructor(
    @repository(UnitLayoutRepository)
    public unitLayoutRepository: UnitLayoutRepository,
  ) { }

  @post('/unit-layout-master')
  @response(200, {
    description: 'UnitLayout model instance',
    content: { 'application/json': { schema: getModelSchemaRef(UnitLayout) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayout, {
            title: 'NewUnitLayout',
            exclude: ['id'],
          }),
        },
      },
    })
    unitLayout: Omit<UnitLayout, 'id'>,
  ): Promise<UnitLayout> {
    return this.unitLayoutRepository.create(unitLayout);
  }

  @get('/unit-layout-master/count')
  @response(200, {
    description: 'UnitLayout model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(UnitLayout) where?: Where<UnitLayout>,
  ): Promise<Count> {
    return this.unitLayoutRepository.count(where);
  }

  @get('/unit-layout-master')
  @response(200, {
    description: 'Array of UnitLayout model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UnitLayout, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(UnitLayout) filter?: Filter<UnitLayout>,
  ): Promise<UnitLayout[]> {
    return this.unitLayoutRepository.find(filter);
  }

  @patch('/unit-layout-master')
  @response(200, {
    description: 'UnitLayout PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayout, { partial: true }),
        },
      },
    })
    unitLayout: UnitLayout,
    @param.where(UnitLayout) where?: Where<UnitLayout>,
  ): Promise<Count> {
    return this.unitLayoutRepository.updateAll(unitLayout, where);
  }

  @get('/unit-layout-master/{id}')
  @response(200, {
    description: 'UnitLayout model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UnitLayout, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UnitLayout, { exclude: 'where' }) filter?: FilterExcludingWhere<UnitLayout>
  ): Promise<UnitLayout> {
    return this.unitLayoutRepository.findById(id, filter);
  }

  @patch('/unit-layout-master/{id}')
  @response(204, {
    description: 'UnitLayout PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayout, { partial: true }),
        },
      },
    })
    unitLayout: UnitLayout,
  ): Promise<void> {
    await this.unitLayoutRepository.updateById(id, unitLayout);
  }

  @put('/unit-layout-master/{id}')
  @response(204, {
    description: 'UnitLayout PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() unitLayout: UnitLayout,
  ): Promise<void> {
    await this.unitLayoutRepository.replaceById(id, unitLayout);
  }

  @del('/unit-layout-master/{id}')
  @response(204, {
    description: 'UnitLayout DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.unitLayoutRepository.deleteById(id);
  }
}
