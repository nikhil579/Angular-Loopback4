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
import {BudgetMaster} from '../models';
import {BudgetMasterRepository} from '../repositories';

export class BudgetMasterController {
  constructor(
    @repository(BudgetMasterRepository)
    public budgetMasterRepository : BudgetMasterRepository,
  ) {}

  @post('/budget-masters')
  @response(200, {
    description: 'BudgetMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(BudgetMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BudgetMaster, {
            title: 'NewBudgetMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    budgetMaster: Omit<BudgetMaster, 'id'>,
  ): Promise<BudgetMaster> {
    return this.budgetMasterRepository.create(budgetMaster);
  }

  @get('/budget-masters/count')
  @response(200, {
    description: 'BudgetMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BudgetMaster) where?: Where<BudgetMaster>,
  ): Promise<Count> {
    return this.budgetMasterRepository.count(where);
  }

  @get('/budget-masters')
  @response(200, {
    description: 'Array of BudgetMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BudgetMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BudgetMaster) filter?: Filter<BudgetMaster>,
  ): Promise<BudgetMaster[]> {
    return this.budgetMasterRepository.find(filter);
  }

  @patch('/budget-masters')
  @response(200, {
    description: 'BudgetMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BudgetMaster, {partial: true}),
        },
      },
    })
    budgetMaster: BudgetMaster,
    @param.where(BudgetMaster) where?: Where<BudgetMaster>,
  ): Promise<Count> {
    return this.budgetMasterRepository.updateAll(budgetMaster, where);
  }

  @get('/budget-masters/{id}')
  @response(200, {
    description: 'BudgetMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BudgetMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BudgetMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BudgetMaster>
  ): Promise<BudgetMaster> {
    return this.budgetMasterRepository.findById(id, filter);
  }

  @patch('/budget-masters/{id}')
  @response(204, {
    description: 'BudgetMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BudgetMaster, {partial: true}),
        },
      },
    })
    budgetMaster: BudgetMaster,
  ): Promise<void> {
    await this.budgetMasterRepository.updateById(id, budgetMaster);
  }

  @put('/budget-masters/{id}')
  @response(204, {
    description: 'BudgetMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() budgetMaster: BudgetMaster,
  ): Promise<void> {
    await this.budgetMasterRepository.replaceById(id, budgetMaster);
  }

  @del('/budget-masters/{id}')
  @response(204, {
    description: 'BudgetMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.budgetMasterRepository.deleteById(id);
  }
}
