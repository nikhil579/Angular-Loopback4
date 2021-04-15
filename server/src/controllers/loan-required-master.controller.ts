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
import {LoanRequiredMaster} from '../models';
import {LoanRequiredMasterRepository} from '../repositories';

export class LoanRequiredMasterController {
  constructor(
    @repository(LoanRequiredMasterRepository)
    public loanRequiredMasterRepository : LoanRequiredMasterRepository,
  ) {}

  @post('/loan-required-masters')
  @response(200, {
    description: 'LoanRequiredMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(LoanRequiredMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequiredMaster, {
            title: 'NewLoanRequiredMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    loanRequiredMaster: Omit<LoanRequiredMaster, 'id'>,
  ): Promise<LoanRequiredMaster> {
    return this.loanRequiredMasterRepository.create(loanRequiredMaster);
  }

  @get('/loan-required-masters/count')
  @response(200, {
    description: 'LoanRequiredMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LoanRequiredMaster) where?: Where<LoanRequiredMaster>,
  ): Promise<Count> {
    return this.loanRequiredMasterRepository.count(where);
  }

  @get('/loan-required-masters')
  @response(200, {
    description: 'Array of LoanRequiredMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LoanRequiredMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LoanRequiredMaster) filter?: Filter<LoanRequiredMaster>,
  ): Promise<LoanRequiredMaster[]> {
    return this.loanRequiredMasterRepository.find(filter);
  }

  @patch('/loan-required-masters')
  @response(200, {
    description: 'LoanRequiredMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequiredMaster, {partial: true}),
        },
      },
    })
    loanRequiredMaster: LoanRequiredMaster,
    @param.where(LoanRequiredMaster) where?: Where<LoanRequiredMaster>,
  ): Promise<Count> {
    return this.loanRequiredMasterRepository.updateAll(loanRequiredMaster, where);
  }

  @get('/loan-required-masters/{id}')
  @response(200, {
    description: 'LoanRequiredMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LoanRequiredMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(LoanRequiredMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<LoanRequiredMaster>
  ): Promise<LoanRequiredMaster> {
    return this.loanRequiredMasterRepository.findById(id, filter);
  }

  @patch('/loan-required-masters/{id}')
  @response(204, {
    description: 'LoanRequiredMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoanRequiredMaster, {partial: true}),
        },
      },
    })
    loanRequiredMaster: LoanRequiredMaster,
  ): Promise<void> {
    await this.loanRequiredMasterRepository.updateById(id, loanRequiredMaster);
  }

  @put('/loan-required-masters/{id}')
  @response(204, {
    description: 'LoanRequiredMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() loanRequiredMaster: LoanRequiredMaster,
  ): Promise<void> {
    await this.loanRequiredMasterRepository.replaceById(id, loanRequiredMaster);
  }

  @del('/loan-required-masters/{id}')
  @response(204, {
    description: 'LoanRequiredMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loanRequiredMasterRepository.deleteById(id);
  }
}
