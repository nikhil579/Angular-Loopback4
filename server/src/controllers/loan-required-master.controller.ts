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
import { LoanRequired } from '../models';
import { LoanRequiredRepository } from '../repositories';

export class LoanRequiredController {
  constructor(
    @repository(LoanRequiredRepository)
    public loanRequiredRepository: LoanRequiredRepository,
  ) { }

  @post('/loan-required-master')
  @response(200, {
    description: 'LoanRequired model instance',
    content: { 'application/json': { schema: getModelSchemaRef(LoanRequired) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequired, {
            title: 'NewLoanRequired',
            exclude: ['id'],
          }),
        },
      },
    })
    loanRequired: Omit<LoanRequired, 'id'>,
  ): Promise<LoanRequired> {
    return this.loanRequiredRepository.create(loanRequired);
  }

  @get('/loan-required-master/count')
  @response(200, {
    description: 'LoanRequired model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(LoanRequired) where?: Where<LoanRequired>,
  ): Promise<Count> {
    return this.loanRequiredRepository.count(where);
  }

  @get('/loan-required-master')
  @response(200, {
    description: 'Array of LoanRequired model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LoanRequired, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(LoanRequired) filter?: Filter<LoanRequired>,
  ): Promise<LoanRequired[]> {
    return this.loanRequiredRepository.find(filter);
  }

  @patch('/loan-required-master')
  @response(200, {
    description: 'LoanRequired PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequired, { partial: true }),
        },
      },
    })
    loanRequired: LoanRequired,
    @param.where(LoanRequired) where?: Where<LoanRequired>,
  ): Promise<Count> {
    return this.loanRequiredRepository.updateAll(loanRequired, where);
  }

  @get('/loan-required-master/{id}')
  @response(200, {
    description: 'LoanRequired model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LoanRequired, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LoanRequired, { exclude: 'where' }) filter?: FilterExcludingWhere<LoanRequired>
  ): Promise<LoanRequired> {
    return this.loanRequiredRepository.findById(id, filter);
  }

  @patch('/loan-required-master/{id}')
  @response(204, {
    description: 'LoanRequired PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequired, { partial: true }),
        },
      },
    })
    loanRequired: LoanRequired,
  ): Promise<void> {
    await this.loanRequiredRepository.updateById(id, loanRequired);
  }

  @put('/loan-required-master/{id}')
  @response(204, {
    description: 'LoanRequired PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() loanRequired: LoanRequired,
  ): Promise<void> {
    await this.loanRequiredRepository.replaceById(id, loanRequired);
  }

  @del('/loan-required-master/{id}')
  @response(204, {
    description: 'LoanRequired DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loanRequiredRepository.deleteById(id);
  }
}
