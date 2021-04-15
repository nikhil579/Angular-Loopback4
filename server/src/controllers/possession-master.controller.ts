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
import {PossessionMaster} from '../models';
import {PossessionMasterRepository} from '../repositories';

export class PossessionMasterController {
  constructor(
    @repository(PossessionMasterRepository)
    public possessionMasterRepository : PossessionMasterRepository,
  ) {}

  @post('/possession-masters')
  @response(200, {
    description: 'PossessionMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PossessionMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PossessionMaster, {
            title: 'NewPossessionMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    possessionMaster: Omit<PossessionMaster, 'id'>,
  ): Promise<PossessionMaster> {
    return this.possessionMasterRepository.create(possessionMaster);
  }

  @get('/possession-masters/count')
  @response(200, {
    description: 'PossessionMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PossessionMaster) where?: Where<PossessionMaster>,
  ): Promise<Count> {
    return this.possessionMasterRepository.count(where);
  }

  @get('/possession-masters')
  @response(200, {
    description: 'Array of PossessionMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PossessionMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PossessionMaster) filter?: Filter<PossessionMaster>,
  ): Promise<PossessionMaster[]> {
    return this.possessionMasterRepository.find(filter);
  }

  @patch('/possession-masters')
  @response(200, {
    description: 'PossessionMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PossessionMaster, {partial: true}),
        },
      },
    })
    possessionMaster: PossessionMaster,
    @param.where(PossessionMaster) where?: Where<PossessionMaster>,
  ): Promise<Count> {
    return this.possessionMasterRepository.updateAll(possessionMaster, where);
  }

  @get('/possession-masters/{id}')
  @response(200, {
    description: 'PossessionMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PossessionMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PossessionMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PossessionMaster>
  ): Promise<PossessionMaster> {
    return this.possessionMasterRepository.findById(id, filter);
  }

  @patch('/possession-masters/{id}')
  @response(204, {
    description: 'PossessionMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PossessionMaster, {partial: true}),
        },
      },
    })
    possessionMaster: PossessionMaster,
  ): Promise<void> {
    await this.possessionMasterRepository.updateById(id, possessionMaster);
  }

  @put('/possession-masters/{id}')
  @response(204, {
    description: 'PossessionMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() possessionMaster: PossessionMaster,
  ): Promise<void> {
    await this.possessionMasterRepository.replaceById(id, possessionMaster);
  }

  @del('/possession-masters/{id}')
  @response(204, {
    description: 'PossessionMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.possessionMasterRepository.deleteById(id);
  }
}
