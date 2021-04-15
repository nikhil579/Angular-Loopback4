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
import {FinanceDetailMaster} from '../models';
import {FinanceDetailMasterRepository} from '../repositories';

export class FinanceDetailMasterController {
  constructor(
    @repository(FinanceDetailMasterRepository)
    public financeDetailMasterRepository : FinanceDetailMasterRepository,
  ) {}

  @post('/finance-detail-masters')
  @response(200, {
    description: 'FinanceDetailMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(FinanceDetailMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetailMaster, {
            title: 'NewFinanceDetailMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    financeDetailMaster: Omit<FinanceDetailMaster, 'id'>,
  ): Promise<FinanceDetailMaster> {
    return this.financeDetailMasterRepository.create(financeDetailMaster);
  }

  @get('/finance-detail-masters/count')
  @response(200, {
    description: 'FinanceDetailMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FinanceDetailMaster) where?: Where<FinanceDetailMaster>,
  ): Promise<Count> {
    return this.financeDetailMasterRepository.count(where);
  }

  @get('/finance-detail-masters')
  @response(200, {
    description: 'Array of FinanceDetailMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FinanceDetailMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FinanceDetailMaster) filter?: Filter<FinanceDetailMaster>,
  ): Promise<FinanceDetailMaster[]> {
    return this.financeDetailMasterRepository.find(filter);
  }

  @patch('/finance-detail-masters')
  @response(200, {
    description: 'FinanceDetailMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetailMaster, {partial: true}),
        },
      },
    })
    financeDetailMaster: FinanceDetailMaster,
    @param.where(FinanceDetailMaster) where?: Where<FinanceDetailMaster>,
  ): Promise<Count> {
    return this.financeDetailMasterRepository.updateAll(financeDetailMaster, where);
  }

  @get('/finance-detail-masters/{id}')
  @response(200, {
    description: 'FinanceDetailMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FinanceDetailMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FinanceDetailMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FinanceDetailMaster>
  ): Promise<FinanceDetailMaster> {
    return this.financeDetailMasterRepository.findById(id, filter);
  }

  @patch('/finance-detail-masters/{id}')
  @response(204, {
    description: 'FinanceDetailMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FinanceDetailMaster, {partial: true}),
        },
      },
    })
    financeDetailMaster: FinanceDetailMaster,
  ): Promise<void> {
    await this.financeDetailMasterRepository.updateById(id, financeDetailMaster);
  }

  @put('/finance-detail-masters/{id}')
  @response(204, {
    description: 'FinanceDetailMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() financeDetailMaster: FinanceDetailMaster,
  ): Promise<void> {
    await this.financeDetailMasterRepository.replaceById(id, financeDetailMaster);
  }

  @del('/finance-detail-masters/{id}')
  @response(204, {
    description: 'FinanceDetailMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.financeDetailMasterRepository.deleteById(id);
  }
}
