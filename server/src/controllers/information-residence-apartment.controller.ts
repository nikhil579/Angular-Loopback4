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
import {InformationResidenceApartment} from '../models';
import {InformationResidenceApartmentRepository} from '../repositories';

export class InformationResidenceApartmentController {
  constructor(
    @repository(InformationResidenceApartmentRepository)
    public informationResidenceApartmentRepository : InformationResidenceApartmentRepository,
  ) {}

  @post('/information-residence-apartments')
  @response(200, {
    description: 'InformationResidenceApartment model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformationResidenceApartment)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceApartment, {
            title: 'NewInformationResidenceApartment',
            exclude: ['id'],
          }),
        },
      },
    })
    informationResidenceApartment: Omit<InformationResidenceApartment, 'id'>,
  ): Promise<InformationResidenceApartment> {
    return this.informationResidenceApartmentRepository.create(informationResidenceApartment);
  }

  @get('/information-residence-apartments/count')
  @response(200, {
    description: 'InformationResidenceApartment model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformationResidenceApartment) where?: Where<InformationResidenceApartment>,
  ): Promise<Count> {
    return this.informationResidenceApartmentRepository.count(where);
  }

  @get('/information-residence-apartments')
  @response(200, {
    description: 'Array of InformationResidenceApartment model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformationResidenceApartment, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformationResidenceApartment) filter?: Filter<InformationResidenceApartment>,
  ): Promise<InformationResidenceApartment[]> {
    return this.informationResidenceApartmentRepository.find(filter);
  }

  @patch('/information-residence-apartments')
  @response(200, {
    description: 'InformationResidenceApartment PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceApartment, {partial: true}),
        },
      },
    })
    informationResidenceApartment: InformationResidenceApartment,
    @param.where(InformationResidenceApartment) where?: Where<InformationResidenceApartment>,
  ): Promise<Count> {
    return this.informationResidenceApartmentRepository.updateAll(informationResidenceApartment, where);
  }

  @get('/information-residence-apartments/{id}')
  @response(200, {
    description: 'InformationResidenceApartment model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformationResidenceApartment, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InformationResidenceApartment, {exclude: 'where'}) filter?: FilterExcludingWhere<InformationResidenceApartment>
  ): Promise<InformationResidenceApartment> {
    return this.informationResidenceApartmentRepository.findById(id, filter);
  }

  @patch('/information-residence-apartments/{id}')
  @response(204, {
    description: 'InformationResidenceApartment PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceApartment, {partial: true}),
        },
      },
    })
    informationResidenceApartment: InformationResidenceApartment,
  ): Promise<void> {
    await this.informationResidenceApartmentRepository.updateById(id, informationResidenceApartment);
  }

  @put('/information-residence-apartments/{id}')
  @response(204, {
    description: 'InformationResidenceApartment PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() informationResidenceApartment: InformationResidenceApartment,
  ): Promise<void> {
    await this.informationResidenceApartmentRepository.replaceById(id, informationResidenceApartment);
  }

  @del('/information-residence-apartments/{id}')
  @response(204, {
    description: 'InformationResidenceApartment DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.informationResidenceApartmentRepository.deleteById(id);
  }
}
