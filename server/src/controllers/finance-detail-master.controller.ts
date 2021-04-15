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
import { FinanceDetail } from '../models';
import { FinanceDetailRepository } from '../repositories';

export class FinanceDetailController {
  constructor(
    @repository(FinanceDetailRepository)
    public financeDetailRepository: FinanceDetailRepository,
  ) { }

  @post('/finance-detail-master')
  @response(200, {
    description: 'FinanceDetail model instance',
    content: { 'application/json': { schema: getModelSchemaRef(FinanceDetail) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetail, {
            title: 'NewFinanceDetail',
            exclude: ['id'],
          }),
        },
      },
    })
    financeDetail: Omit<FinanceDetail, 'id'>,
  ): Promise<FinanceDetail> {
    return this.financeDetailRepository.create(financeDetail);
  }

  @get('/finance-detail-master/count')
  @response(200, {
    description: 'FinanceDetail model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(FinanceDetail) where?: Where<FinanceDetail>,
  ): Promise<Count> {
    return this.financeDetailRepository.count(where);
  }

  @get('/finance-detail-master')
  @response(200, {
    description: 'Array of FinanceDetail model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FinanceDetail, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(FinanceDetail) filter?: Filter<FinanceDetail>,
  ): Promise<FinanceDetail[]> {
    return this.financeDetailRepository.find(filter);
  }

  @patch('/finance-detail-master')
  @response(200, {
    description: 'FinanceDetail PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetail, { partial: true }),
        },
      },
    })
    financeDetail: FinanceDetail,
    @param.where(FinanceDetail) where?: Where<FinanceDetail>,
  ): Promise<Count> {
    return this.financeDetailRepository.updateAll(financeDetail, where);
  }

  @get('/finance-detail-master/{id}')
  @response(200, {
    description: 'FinanceDetail model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FinanceDetail, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FinanceDetail, { exclude: 'where' }) filter?: FilterExcludingWhere<FinanceDetail>
  ): Promise<FinanceDetail> {
    return this.financeDetailRepository.findById(id, filter);
  }

  @patch('/finance-detail-master/{id}')
  @response(204, {
    description: 'FinanceDetail PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetail, { partial: true }),
        },
      },
    })
    financeDetail: FinanceDetail,
  ): Promise<void> {
    await this.financeDetailRepository.updateById(id, financeDetail);
  }

  @put('/finance-detail-master/{id}')
  @response(204, {
    description: 'FinanceDetail PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() financeDetail: FinanceDetail,
  ): Promise<void> {
    await this.financeDetailRepository.replaceById(id, financeDetail);
  }

  @del('/finance-detail-master/{id}')
  @response(204, {
    description: 'FinanceDetail DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.financeDetailRepository.deleteById(id);
  }
}
