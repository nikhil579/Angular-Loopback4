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
import {ResidenceTypeMaster} from '../models';
import {ResidenceTypeMasterRepository} from '../repositories';

export class ResidenceTypeMasterController {
  constructor(
    @repository(ResidenceTypeMasterRepository)
    public residenceTypeMasterRepository : ResidenceTypeMasterRepository,
  ) {}

  @post('/residence-type-masters')
  @response(200, {
    description: 'ResidenceTypeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResidenceTypeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceTypeMaster, {
            title: 'NewResidenceTypeMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    residenceTypeMaster: Omit<ResidenceTypeMaster, 'id'>,
  ): Promise<ResidenceTypeMaster> {
    return this.residenceTypeMasterRepository.create(residenceTypeMaster);
  }

  @get('/residence-type-masters/count')
  @response(200, {
    description: 'ResidenceTypeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResidenceTypeMaster) where?: Where<ResidenceTypeMaster>,
  ): Promise<Count> {
    return this.residenceTypeMasterRepository.count(where);
  }

  @get('/residence-type-masters')
  @response(200, {
    description: 'Array of ResidenceTypeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResidenceTypeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResidenceTypeMaster) filter?: Filter<ResidenceTypeMaster>,
  ): Promise<ResidenceTypeMaster[]> {
    return this.residenceTypeMasterRepository.find(filter);
  }

  @patch('/residence-type-masters')
  @response(200, {
    description: 'ResidenceTypeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceTypeMaster, {partial: true}),
        },
      },
    })
    residenceTypeMaster: ResidenceTypeMaster,
    @param.where(ResidenceTypeMaster) where?: Where<ResidenceTypeMaster>,
  ): Promise<Count> {
    return this.residenceTypeMasterRepository.updateAll(residenceTypeMaster, where);
  }

  @get('/residence-type-masters/{id}')
  @response(200, {
    description: 'ResidenceTypeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResidenceTypeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResidenceTypeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ResidenceTypeMaster>
  ): Promise<ResidenceTypeMaster> {
    return this.residenceTypeMasterRepository.findById(id, filter);
  }

  @patch('/residence-type-masters/{id}')
  @response(204, {
    description: 'ResidenceTypeMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceTypeMaster, {partial: true}),
        },
      },
    })
    residenceTypeMaster: ResidenceTypeMaster,
  ): Promise<void> {
    await this.residenceTypeMasterRepository.updateById(id, residenceTypeMaster);
  }

  @put('/residence-type-masters/{id}')
  @response(204, {
    description: 'ResidenceTypeMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() residenceTypeMaster: ResidenceTypeMaster,
  ): Promise<void> {
    await this.residenceTypeMasterRepository.replaceById(id, residenceTypeMaster);
  }

  @del('/residence-type-masters/{id}')
  @response(204, {
    description: 'ResidenceTypeMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.residenceTypeMasterRepository.deleteById(id);
  }
}
