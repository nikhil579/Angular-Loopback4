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
import {InformationResidenceHouse} from '../models';
import {InformationResidenceHouseRepository} from '../repositories';

export class InformationResidenceHouseController {
  constructor(
    @repository(InformationResidenceHouseRepository)
    public informationResidenceHouseRepository : InformationResidenceHouseRepository,
  ) {}

  @post('/information-residence-houses')
  @response(200, {
    description: 'InformationResidenceHouse model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformationResidenceHouse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceHouse, {
            title: 'NewInformationResidenceHouse',
            exclude: ['id'],
          }),
        },
      },
    })
    informationResidenceHouse: Omit<InformationResidenceHouse, 'id'>,
  ): Promise<InformationResidenceHouse> {
    return this.informationResidenceHouseRepository.create(informationResidenceHouse);
  }

  @get('/information-residence-houses/count')
  @response(200, {
    description: 'InformationResidenceHouse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformationResidenceHouse) where?: Where<InformationResidenceHouse>,
  ): Promise<Count> {
    return this.informationResidenceHouseRepository.count(where);
  }

  @get('/information-residence-houses')
  @response(200, {
    description: 'Array of InformationResidenceHouse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformationResidenceHouse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformationResidenceHouse) filter?: Filter<InformationResidenceHouse>,
  ): Promise<InformationResidenceHouse[]> {
    return this.informationResidenceHouseRepository.find(filter);
  }

  @patch('/information-residence-houses')
  @response(200, {
    description: 'InformationResidenceHouse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceHouse, {partial: true}),
        },
      },
    })
    informationResidenceHouse: InformationResidenceHouse,
    @param.where(InformationResidenceHouse) where?: Where<InformationResidenceHouse>,
  ): Promise<Count> {
    return this.informationResidenceHouseRepository.updateAll(informationResidenceHouse, where);
  }

  @get('/information-residence-houses/{id}')
  @response(200, {
    description: 'InformationResidenceHouse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformationResidenceHouse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InformationResidenceHouse, {exclude: 'where'}) filter?: FilterExcludingWhere<InformationResidenceHouse>
  ): Promise<InformationResidenceHouse> {
    return this.informationResidenceHouseRepository.findById(id, filter);
  }

  @patch('/information-residence-houses/{id}')
  @response(204, {
    description: 'InformationResidenceHouse PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationResidenceHouse, {partial: true}),
        },
      },
    })
    informationResidenceHouse: InformationResidenceHouse,
  ): Promise<void> {
    await this.informationResidenceHouseRepository.updateById(id, informationResidenceHouse);
  }

  @put('/information-residence-houses/{id}')
  @response(204, {
    description: 'InformationResidenceHouse PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() informationResidenceHouse: InformationResidenceHouse,
  ): Promise<void> {
    await this.informationResidenceHouseRepository.replaceById(id, informationResidenceHouse);
  }

  @del('/information-residence-houses/{id}')
  @response(204, {
    description: 'InformationResidenceHouse DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.informationResidenceHouseRepository.deleteById(id);
  }
}
