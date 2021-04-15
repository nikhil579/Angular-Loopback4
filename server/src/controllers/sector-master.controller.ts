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
import { Sector } from '../models';
import { SectorRepository } from '../repositories';

export class SectorController {
  constructor(
    @repository(SectorRepository)
    public sectorRepository: SectorRepository,
  ) { }

  @post('/sector-master')
  @response(200, {
    description: 'Sector model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Sector) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sector, {
            title: 'NewSector',
            exclude: ['id'],
          }),
        },
      },
    })
    sector: Omit<Sector, 'id'>,
  ): Promise<Sector> {
    return this.sectorRepository.create(sector);
  }

  @get('/sector-master/count')
  @response(200, {
    description: 'Sector model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Sector) where?: Where<Sector>,
  ): Promise<Count> {
    return this.sectorRepository.count(where);
  }

  @get('/sector-master')
  @response(200, {
    description: 'Array of Sector model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sector, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Sector) filter?: Filter<Sector>,
  ): Promise<Sector[]> {
    return this.sectorRepository.find(filter);
  }

  @patch('/sector-master')
  @response(200, {
    description: 'Sector PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sector, { partial: true }),
        },
      },
    })
    sector: Sector,
    @param.where(Sector) where?: Where<Sector>,
  ): Promise<Count> {
    return this.sectorRepository.updateAll(sector, where);
  }

  @get('/sector-master/{id}')
  @response(200, {
    description: 'Sector model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sector, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sector, { exclude: 'where' }) filter?: FilterExcludingWhere<Sector>
  ): Promise<Sector> {
    return this.sectorRepository.findById(id, filter);
  }

  @patch('/sector-master/{id}')
  @response(204, {
    description: 'Sector PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sector, { partial: true }),
        },
      },
    })
    sector: Sector,
  ): Promise<void> {
    await this.sectorRepository.updateById(id, sector);
  }

  @put('/sector-master/{id}')
  @response(204, {
    description: 'Sector PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sector: Sector,
  ): Promise<void> {
    await this.sectorRepository.replaceById(id, sector);
  }

  @del('/sector-master/{id}')
  @response(204, {
    description: 'Sector DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sectorRepository.deleteById(id);
  }
}
