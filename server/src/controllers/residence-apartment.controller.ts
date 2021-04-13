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
import {ResidenceApartment} from '../models';
import {ResidenceApartmentRepository} from '../repositories';

export class ResidenceApartmentController {
  constructor(
    @repository(ResidenceApartmentRepository)
    public residenceApartmentRepository : ResidenceApartmentRepository,
  ) {}

  @post('/residence-apartments')
  @response(200, {
    description: 'ResidenceApartment model instance',
    content: {'application/json': {schema: getModelSchemaRef(ResidenceApartment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceApartment, {
            title: 'NewResidenceApartment',
            exclude: ['id'],
          }),
        },
      },
    })
    residenceApartment: Omit<ResidenceApartment, 'id'>,
  ): Promise<ResidenceApartment> {
    return this.residenceApartmentRepository.create(residenceApartment);
  }

  @get('/residence-apartments/count')
  @response(200, {
    description: 'ResidenceApartment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ResidenceApartment) where?: Where<ResidenceApartment>,
  ): Promise<Count> {
    return this.residenceApartmentRepository.count(where);
  }

  @get('/residence-apartments')
  @response(200, {
    description: 'Array of ResidenceApartment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ResidenceApartment, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ResidenceApartment) filter?: Filter<ResidenceApartment>,
  ): Promise<ResidenceApartment[]> {
    return this.residenceApartmentRepository.find(filter);
  }

  @patch('/residence-apartments')
  @response(200, {
    description: 'ResidenceApartment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceApartment, {partial: true}),
        },
      },
    })
    residenceApartment: ResidenceApartment,
    @param.where(ResidenceApartment) where?: Where<ResidenceApartment>,
  ): Promise<Count> {
    return this.residenceApartmentRepository.updateAll(residenceApartment, where);
  }

  @get('/residence-apartments/{id}')
  @response(200, {
    description: 'ResidenceApartment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ResidenceApartment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ResidenceApartment, {exclude: 'where'}) filter?: FilterExcludingWhere<ResidenceApartment>
  ): Promise<ResidenceApartment> {
    return this.residenceApartmentRepository.findById(id, filter);
  }

  @patch('/residence-apartments/{id}')
  @response(204, {
    description: 'ResidenceApartment PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResidenceApartment, {partial: true}),
        },
      },
    })
    residenceApartment: ResidenceApartment,
  ): Promise<void> {
    await this.residenceApartmentRepository.updateById(id, residenceApartment);
  }

  @put('/residence-apartments/{id}')
  @response(204, {
    description: 'ResidenceApartment PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() residenceApartment: ResidenceApartment,
  ): Promise<void> {
    await this.residenceApartmentRepository.replaceById(id, residenceApartment);
  }

  @del('/residence-apartments/{id}')
  @response(204, {
    description: 'ResidenceApartment DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.residenceApartmentRepository.deleteById(id);
  }
}
