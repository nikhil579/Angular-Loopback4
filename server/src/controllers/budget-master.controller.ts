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
import { Budget } from '../models';
import { BudgetRepository } from '../repositories';

export class BudgetController {
  constructor(
    @repository(BudgetRepository)
    public budgetRepository: BudgetRepository,
  ) { }

  @post('/budget-master')
  @response(200, {
    description: 'Budget model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Budget) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Budget, {
            title: 'NewBudget',
            exclude: ['id'],
          }),
        },
      },
    })
    budget: Omit<Budget, 'id'>,
  ): Promise<Budget> {
    return this.budgetRepository.create(budget);
  }

  @get('/budget-master/count')
  @response(200, {
    description: 'Budget model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Budget) where?: Where<Budget>,
  ): Promise<Count> {
    return this.budgetRepository.count(where);
  }

  @get('/budget-master')
  @response(200, {
    description: 'Array of Budget model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Budget, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Budget) filter?: Filter<Budget>,
  ): Promise<Budget[]> {
    return this.budgetRepository.find(filter);
  }

  @patch('/budget-master')
  @response(200, {
    description: 'Budget PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Budget, { partial: true }),
        },
      },
    })
    budget: Budget,
    @param.where(Budget) where?: Where<Budget>,
  ): Promise<Count> {
    return this.budgetRepository.updateAll(budget, where);
  }

  @get('/budget-master/{id}')
  @response(200, {
    description: 'Budget model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Budget, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Budget, { exclude: 'where' }) filter?: FilterExcludingWhere<Budget>
  ): Promise<Budget> {
    return this.budgetRepository.findById(id, filter);
  }

  @patch('/budget-master/{id}')
  @response(204, {
    description: 'Budget PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Budget, { partial: true }),
        },
      },
    })
    budget: Budget,
  ): Promise<void> {
    await this.budgetRepository.updateById(id, budget);
  }

  @put('/budget-master/{id}')
  @response(204, {
    description: 'Budget PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() budget: Budget,
  ): Promise<void> {
    await this.budgetRepository.replaceById(id, budget);
  }

  @del('/budget-master/{id}')
  @response(204, {
    description: 'Budget DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.budgetRepository.deleteById(id);
  }
}
