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
import {OccupationMaster} from '../models';
import {OccupationMasterRepository} from '../repositories';

export class OccupationMasterController {
  constructor(
    @repository(OccupationMasterRepository)
    public occupationMasterRepository : OccupationMasterRepository,
  ) {}

  @post('/occupation-masters')
  @response(200, {
    description: 'OccupationMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(OccupationMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupationMaster, {
            title: 'NewOccupationMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    occupationMaster: Omit<OccupationMaster, 'id'>,
  ): Promise<OccupationMaster> {
    return this.occupationMasterRepository.create(occupationMaster);
  }

  @get('/occupation-masters/count')
  @response(200, {
    description: 'OccupationMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OccupationMaster) where?: Where<OccupationMaster>,
  ): Promise<Count> {
    return this.occupationMasterRepository.count(where);
  }

  @get('/occupation-masters')
  @response(200, {
    description: 'Array of OccupationMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OccupationMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OccupationMaster) filter?: Filter<OccupationMaster>,
  ): Promise<OccupationMaster[]> {
    return this.occupationMasterRepository.find(filter);
  }

  @patch('/occupation-masters')
  @response(200, {
    description: 'OccupationMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupationMaster, {partial: true}),
        },
      },
    })
    occupationMaster: OccupationMaster,
    @param.where(OccupationMaster) where?: Where<OccupationMaster>,
  ): Promise<Count> {
    return this.occupationMasterRepository.updateAll(occupationMaster, where);
  }

  @get('/occupation-masters/{id}')
  @response(200, {
    description: 'OccupationMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OccupationMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OccupationMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OccupationMaster>
  ): Promise<OccupationMaster> {
    return this.occupationMasterRepository.findById(id, filter);
  }

  @patch('/occupation-masters/{id}')
  @response(204, {
    description: 'OccupationMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OccupationMaster, {partial: true}),
        },
      },
    })
    occupationMaster: OccupationMaster,
  ): Promise<void> {
    await this.occupationMasterRepository.updateById(id, occupationMaster);
  }

  @put('/occupation-masters/{id}')
  @response(204, {
    description: 'OccupationMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() occupationMaster: OccupationMaster,
  ): Promise<void> {
    await this.occupationMasterRepository.replaceById(id, occupationMaster);
  }

  @del('/occupation-masters/{id}')
  @response(204, {
    description: 'OccupationMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.occupationMasterRepository.deleteById(id);
  }
}
