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
import {CustomerInfo} from '../models';
import {CustomerInfoRepository} from '../repositories';

export class CustomerInfoController {
  constructor(
    @repository(CustomerInfoRepository)
    public customerInfoRepository : CustomerInfoRepository,
  ) {}

  @post('/customer-infos')
  @response(200, {
    description: 'CustomerInfo model instance',
    content: {'application/json': {schema: getModelSchemaRef(CustomerInfo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerInfo, {
            title: 'NewCustomerInfo',
            exclude: ['id'],
          }),
        },
      },
    })
    customerInfo: Omit<CustomerInfo, 'id'>,
  ): Promise<CustomerInfo> {
    return this.customerInfoRepository.create(customerInfo);
  }

  @get('/customer-infos/count')
  @response(200, {
    description: 'CustomerInfo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CustomerInfo) where?: Where<CustomerInfo>,
  ): Promise<Count> {
    return this.customerInfoRepository.count(where);
  }

  @get('/customer-infos')
  @response(200, {
    description: 'Array of CustomerInfo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CustomerInfo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CustomerInfo) filter?: Filter<CustomerInfo>,
  ): Promise<CustomerInfo[]> {
    return this.customerInfoRepository.find(filter);
  }

  @patch('/customer-infos')
  @response(200, {
    description: 'CustomerInfo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerInfo, {partial: true}),
        },
      },
    })
    customerInfo: CustomerInfo,
    @param.where(CustomerInfo) where?: Where<CustomerInfo>,
  ): Promise<Count> {
    return this.customerInfoRepository.updateAll(customerInfo, where);
  }

  @get('/customer-infos/{id}')
  @response(200, {
    description: 'CustomerInfo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CustomerInfo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CustomerInfo, {exclude: 'where'}) filter?: FilterExcludingWhere<CustomerInfo>
  ): Promise<CustomerInfo> {
    return this.customerInfoRepository.findById(id, filter);
  }

  @patch('/customer-infos/{id}')
  @response(204, {
    description: 'CustomerInfo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerInfo, {partial: true}),
        },
      },
    })
    customerInfo: CustomerInfo,
  ): Promise<void> {
    await this.customerInfoRepository.updateById(id, customerInfo);
  }

  @put('/customer-infos/{id}')
  @response(204, {
    description: 'CustomerInfo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() customerInfo: CustomerInfo,
  ): Promise<void> {
    await this.customerInfoRepository.replaceById(id, customerInfo);
  }

  @del('/customer-infos/{id}')
  @response(204, {
    description: 'CustomerInfo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.customerInfoRepository.deleteById(id);
  }
}
