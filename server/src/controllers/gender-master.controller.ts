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
import {GenderMaster} from '../models';
import {GenderMasterRepository} from '../repositories';

export class GenderMasterController {
  constructor(
    @repository(GenderMasterRepository)
    public genderMasterRepository : GenderMasterRepository,
  ) {}

  @post('/gender-masters')
  @response(200, {
    description: 'GenderMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(GenderMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenderMaster, {
            title: 'NewGenderMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    genderMaster: Omit<GenderMaster, 'id'>,
  ): Promise<GenderMaster> {
    return this.genderMasterRepository.create(genderMaster);
  }

  @get('/gender-masters/count')
  @response(200, {
    description: 'GenderMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GenderMaster) where?: Where<GenderMaster>,
  ): Promise<Count> {
    return this.genderMasterRepository.count(where);
  }

  @get('/gender-masters')
  @response(200, {
    description: 'Array of GenderMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GenderMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GenderMaster) filter?: Filter<GenderMaster>,
  ): Promise<GenderMaster[]> {
    return this.genderMasterRepository.find(filter);
  }

  @patch('/gender-masters')
  @response(200, {
    description: 'GenderMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenderMaster, {partial: true}),
        },
      },
    })
    genderMaster: GenderMaster,
    @param.where(GenderMaster) where?: Where<GenderMaster>,
  ): Promise<Count> {
    return this.genderMasterRepository.updateAll(genderMaster, where);
  }

  @get('/gender-masters/{id}')
  @response(200, {
    description: 'GenderMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GenderMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(GenderMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<GenderMaster>
  ): Promise<GenderMaster> {
    return this.genderMasterRepository.findById(id, filter);
  }

  @patch('/gender-masters/{id}')
  @response(204, {
    description: 'GenderMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GenderMaster, {partial: true}),
        },
      },
    })
    genderMaster: GenderMaster,
  ): Promise<void> {
    await this.genderMasterRepository.updateById(id, genderMaster);
  }

  @put('/gender-masters/{id}')
  @response(204, {
    description: 'GenderMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() genderMaster: GenderMaster,
  ): Promise<void> {
    await this.genderMasterRepository.replaceById(id, genderMaster);
  }

  @del('/gender-masters/{id}')
  @response(204, {
    description: 'GenderMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.genderMasterRepository.deleteById(id);
  }
}
