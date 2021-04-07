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
import { RealEstate } from '../models';
import { RealEstateRepository } from '../repositories';

export class RealEstateController {
  constructor(
    @repository(RealEstateRepository)
    public realEstateRepository: RealEstateRepository,
  ) { }

  @post('/real-estates')
  @response(200, {
    description: 'RealEstate model instance',
    content: { 'application/json': { schema: getModelSchemaRef(RealEstate) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstate, {
            title: 'NewRealEstate',
            exclude: ['id'],
          }),
        },
      },
    })
    realEstate: Omit<RealEstate, 'id'>,
  ): Promise<RealEstate> {
    return this.realEstateRepository.create(realEstate);
  }

  @get('/real-estates/count')
  @response(200, {
    description: 'RealEstate model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(RealEstate) where?: Where<RealEstate>,
  ): Promise<Count> {
    return this.realEstateRepository.count(where);
  }

  @get('/real-estates')
  @response(200, {
    description: 'Array of RealEstate model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RealEstate, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(RealEstate) filter?: Filter<RealEstate>,
  ): Promise<RealEstate[]> {
    return this.realEstateRepository.find(filter);
  }

  @patch('/real-estates')
  @response(200, {
    description: 'RealEstate PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstate, { partial: true }),
        },
      },
    })
    realEstate: RealEstate,
    @param.where(RealEstate) where?: Where<RealEstate>,
  ): Promise<Count> {
    return this.realEstateRepository.updateAll(realEstate, where);
  }

  @get('/real-estates/{id}')
  @response(200, {
    description: 'RealEstate model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RealEstate, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RealEstate, { exclude: 'where' }) filter?: FilterExcludingWhere<RealEstate>
  ): Promise<RealEstate> {
    return this.realEstateRepository.findById(id, filter);
  }

  @patch('/real-estates/{id}')
  @response(204, {
    description: 'RealEstate PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RealEstate, { partial: true }),
        },
      },
    })
    realEstate: RealEstate,
  ): Promise<void> {
    await this.realEstateRepository.updateById(id, realEstate);
  }

  @put('/real-estates/{id}')
  @response(204, {
    description: 'RealEstate PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() realEstate: RealEstate,
  ): Promise<void> {
    await this.realEstateRepository.replaceById(id, realEstate);
  }

  @del('/real-estates/{id}')
  @response(204, {
    description: 'RealEstate DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.realEstateRepository.deleteById(id);
  }
}
