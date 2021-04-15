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
import {UnitLayoutMaster} from '../models';
import {UnitLayoutMasterRepository} from '../repositories';

export class UnitLayoutMasterController {
  constructor(
    @repository(UnitLayoutMasterRepository)
    public unitLayoutMasterRepository : UnitLayoutMasterRepository,
  ) {}

  @post('/unit-layout-masters')
  @response(200, {
    description: 'UnitLayoutMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(UnitLayoutMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayoutMaster, {
            title: 'NewUnitLayoutMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    unitLayoutMaster: Omit<UnitLayoutMaster, 'id'>,
  ): Promise<UnitLayoutMaster> {
    return this.unitLayoutMasterRepository.create(unitLayoutMaster);
  }

  @get('/unit-layout-masters/count')
  @response(200, {
    description: 'UnitLayoutMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UnitLayoutMaster) where?: Where<UnitLayoutMaster>,
  ): Promise<Count> {
    return this.unitLayoutMasterRepository.count(where);
  }

  @get('/unit-layout-masters')
  @response(200, {
    description: 'Array of UnitLayoutMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UnitLayoutMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UnitLayoutMaster) filter?: Filter<UnitLayoutMaster>,
  ): Promise<UnitLayoutMaster[]> {
    return this.unitLayoutMasterRepository.find(filter);
  }

  @patch('/unit-layout-masters')
  @response(200, {
    description: 'UnitLayoutMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayoutMaster, {partial: true}),
        },
      },
    })
    unitLayoutMaster: UnitLayoutMaster,
    @param.where(UnitLayoutMaster) where?: Where<UnitLayoutMaster>,
  ): Promise<Count> {
    return this.unitLayoutMasterRepository.updateAll(unitLayoutMaster, where);
  }

  @get('/unit-layout-masters/{id}')
  @response(200, {
    description: 'UnitLayoutMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UnitLayoutMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UnitLayoutMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<UnitLayoutMaster>
  ): Promise<UnitLayoutMaster> {
    return this.unitLayoutMasterRepository.findById(id, filter);
  }

  @patch('/unit-layout-masters/{id}')
  @response(204, {
    description: 'UnitLayoutMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UnitLayoutMaster, {partial: true}),
        },
      },
    })
    unitLayoutMaster: UnitLayoutMaster,
  ): Promise<void> {
    await this.unitLayoutMasterRepository.updateById(id, unitLayoutMaster);
  }

  @put('/unit-layout-masters/{id}')
  @response(204, {
    description: 'UnitLayoutMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() unitLayoutMaster: UnitLayoutMaster,
  ): Promise<void> {
    await this.unitLayoutMasterRepository.replaceById(id, unitLayoutMaster);
  }

  @del('/unit-layout-masters/{id}')
  @response(204, {
    description: 'UnitLayoutMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.unitLayoutMasterRepository.deleteById(id);
  }
}
