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
import {Boolean} from '../models';
import {BooleanRepository} from '../repositories';

export class BooleanController {
  constructor(
    @repository(BooleanRepository)
    public booleanRepository : BooleanRepository,
  ) {}

  @post('/booleans')
  @response(200, {
    description: 'Boolean model instance',
    content: {'application/json': {schema: getModelSchemaRef(Boolean)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boolean, {
            title: 'NewBoolean',
            exclude: ['id'],
          }),
        },
      },
    })
    boolean: Omit<Boolean, 'id'>,
  ): Promise<Boolean> {
    return this.booleanRepository.create(boolean);
  }

  @get('/booleans/count')
  @response(200, {
    description: 'Boolean model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Boolean) where?: Where<Boolean>,
  ): Promise<Count> {
    return this.booleanRepository.count(where);
  }

  @get('/booleans')
  @response(200, {
    description: 'Array of Boolean model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Boolean, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Boolean) filter?: Filter<Boolean>,
  ): Promise<Boolean[]> {
    return this.booleanRepository.find(filter);
  }

  @patch('/booleans')
  @response(200, {
    description: 'Boolean PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boolean, {partial: true}),
        },
      },
    })
    boolean: Boolean,
    @param.where(Boolean) where?: Where<Boolean>,
  ): Promise<Count> {
    return this.booleanRepository.updateAll(boolean, where);
  }

  @get('/booleans/{id}')
  @response(200, {
    description: 'Boolean model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Boolean, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Boolean, {exclude: 'where'}) filter?: FilterExcludingWhere<Boolean>
  ): Promise<Boolean> {
    return this.booleanRepository.findById(id, filter);
  }

  @patch('/booleans/{id}')
  @response(204, {
    description: 'Boolean PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Boolean, {partial: true}),
        },
      },
    })
    boolean: Boolean,
  ): Promise<void> {
    await this.booleanRepository.updateById(id, boolean);
  }

  @put('/booleans/{id}')
  @response(204, {
    description: 'Boolean PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() boolean: Boolean,
  ): Promise<void> {
    await this.booleanRepository.replaceById(id, boolean);
  }

  @del('/booleans/{id}')
  @response(204, {
    description: 'Boolean DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.booleanRepository.deleteById(id);
  }
}
