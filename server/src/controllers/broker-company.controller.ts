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
import {CompanyBroker} from '../models';
import {CompanyBrokerRepository} from '../repositories';

export class BrokerCompanyController {
  constructor(
    @repository(CompanyBrokerRepository)
    public companyBrokerRepository : CompanyBrokerRepository,
  ) {}

  @post('/brokerships')
  @response(200, {
    description: 'CompanyBroker model instance',
    content: {'application/json': {schema: getModelSchemaRef(CompanyBroker)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyBroker, {
            title: 'NewCompanyBroker',
            
          }),
        },
      },
    })
    companyBroker: CompanyBroker,
  ): Promise<CompanyBroker> {
    return this.companyBrokerRepository.create(companyBroker);
  }

  @get('/brokerships/count')
  @response(200, {
    description: 'CompanyBroker model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CompanyBroker) where?: Where<CompanyBroker>,
  ): Promise<Count> {
    return this.companyBrokerRepository.count(where);
  }

  @get('/brokerships')
  @response(200, {
    description: 'Array of CompanyBroker model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CompanyBroker, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CompanyBroker) filter?: Filter<CompanyBroker>,
  ): Promise<CompanyBroker[]> {
    return this.companyBrokerRepository.find(filter);
  }

  @patch('/brokerships')
  @response(200, {
    description: 'CompanyBroker PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyBroker, {partial: true}),
        },
      },
    })
    companyBroker: CompanyBroker,
    @param.where(CompanyBroker) where?: Where<CompanyBroker>,
  ): Promise<Count> {
    return this.companyBrokerRepository.updateAll(companyBroker, where);
  }

  @get('/brokerships/{id}')
  @response(200, {
    description: 'CompanyBroker model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CompanyBroker, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CompanyBroker, {exclude: 'where'}) filter?: FilterExcludingWhere<CompanyBroker>
  ): Promise<CompanyBroker> {
    return this.companyBrokerRepository.findById(id, filter);
  }

  @patch('/brokerships/{id}')
  @response(204, {
    description: 'CompanyBroker PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyBroker, {partial: true}),
        },
      },
    })
    companyBroker: CompanyBroker,
  ): Promise<void> {
    await this.companyBrokerRepository.updateById(id, companyBroker);
  }

  @put('/brokerships/{id}')
  @response(204, {
    description: 'CompanyBroker PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() companyBroker: CompanyBroker,
  ): Promise<void> {
    await this.companyBrokerRepository.replaceById(id, companyBroker);
  }

  @del('/brokerships/{id}')
  @response(204, {
    description: 'CompanyBroker DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.companyBrokerRepository.deleteById(id);
  }
}
