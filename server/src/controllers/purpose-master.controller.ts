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
import {PurposeMaster} from '../models';
import {PurposeMasterRepository} from '../repositories';

export class PurposeMasterController {
  constructor(
    @repository(PurposeMasterRepository)
    public purposeMasterRepository : PurposeMasterRepository,
  ) {}

  @post('/purpose-masters')
  @response(200, {
    description: 'PurposeMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(PurposeMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PurposeMaster, {
            title: 'NewPurposeMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    purposeMaster: Omit<PurposeMaster, 'id'>,
  ): Promise<PurposeMaster> {
    return this.purposeMasterRepository.create(purposeMaster);
  }

  @get('/purpose-masters/count')
  @response(200, {
    description: 'PurposeMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PurposeMaster) where?: Where<PurposeMaster>,
  ): Promise<Count> {
    return this.purposeMasterRepository.count(where);
  }

  @get('/purpose-masters')
  @response(200, {
    description: 'Array of PurposeMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PurposeMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PurposeMaster) filter?: Filter<PurposeMaster>,
  ): Promise<PurposeMaster[]> {
    return this.purposeMasterRepository.find(filter);
  }

  @patch('/purpose-masters')
  @response(200, {
    description: 'PurposeMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PurposeMaster, {partial: true}),
        },
      },
    })
    purposeMaster: PurposeMaster,
    @param.where(PurposeMaster) where?: Where<PurposeMaster>,
  ): Promise<Count> {
    return this.purposeMasterRepository.updateAll(purposeMaster, where);
  }

  @get('/purpose-masters/{id}')
  @response(200, {
    description: 'PurposeMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PurposeMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PurposeMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PurposeMaster>
  ): Promise<PurposeMaster> {
    return this.purposeMasterRepository.findById(id, filter);
  }

  @patch('/purpose-masters/{id}')
  @response(204, {
    description: 'PurposeMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PurposeMaster, {partial: true}),
        },
      },
    })
    purposeMaster: PurposeMaster,
  ): Promise<void> {
    await this.purposeMasterRepository.updateById(id, purposeMaster);
  }

  @put('/purpose-masters/{id}')
  @response(204, {
    description: 'PurposeMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() purposeMaster: PurposeMaster,
  ): Promise<void> {
    await this.purposeMasterRepository.replaceById(id, purposeMaster);
  }

  @del('/purpose-masters/{id}')
  @response(204, {
    description: 'PurposeMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.purposeMasterRepository.deleteById(id);
  }
}
