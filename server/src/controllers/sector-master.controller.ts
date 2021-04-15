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
import {SectorMaster} from '../models';
import {SectorMasterRepository} from '../repositories';

export class SectorMasterController {
  constructor(
    @repository(SectorMasterRepository)
    public sectorMasterRepository : SectorMasterRepository,
  ) {}

  @post('/sector-masters')
  @response(200, {
    description: 'SectorMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(SectorMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SectorMaster, {
            title: 'NewSectorMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    sectorMaster: Omit<SectorMaster, 'id'>,
  ): Promise<SectorMaster> {
    return this.sectorMasterRepository.create(sectorMaster);
  }

  @get('/sector-masters/count')
  @response(200, {
    description: 'SectorMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SectorMaster) where?: Where<SectorMaster>,
  ): Promise<Count> {
    return this.sectorMasterRepository.count(where);
  }

  @get('/sector-masters')
  @response(200, {
    description: 'Array of SectorMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SectorMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SectorMaster) filter?: Filter<SectorMaster>,
  ): Promise<SectorMaster[]> {
    return this.sectorMasterRepository.find(filter);
  }

  @patch('/sector-masters')
  @response(200, {
    description: 'SectorMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SectorMaster, {partial: true}),
        },
      },
    })
    sectorMaster: SectorMaster,
    @param.where(SectorMaster) where?: Where<SectorMaster>,
  ): Promise<Count> {
    return this.sectorMasterRepository.updateAll(sectorMaster, where);
  }

  @get('/sector-masters/{id}')
  @response(200, {
    description: 'SectorMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SectorMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SectorMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<SectorMaster>
  ): Promise<SectorMaster> {
    return this.sectorMasterRepository.findById(id, filter);
  }

  @patch('/sector-masters/{id}')
  @response(204, {
    description: 'SectorMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SectorMaster, {partial: true}),
        },
      },
    })
    sectorMaster: SectorMaster,
  ): Promise<void> {
    await this.sectorMasterRepository.updateById(id, sectorMaster);
  }

  @put('/sector-masters/{id}')
  @response(204, {
    description: 'SectorMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sectorMaster: SectorMaster,
  ): Promise<void> {
    await this.sectorMasterRepository.replaceById(id, sectorMaster);
  }

  @del('/sector-masters/{id}')
  @response(204, {
    description: 'SectorMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sectorMasterRepository.deleteById(id);
  }
}
