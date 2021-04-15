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
import { Approvals } from '../models';
import { ApprovalsRepository } from '../repositories';

export class ApprovalsController {
  constructor(
    @repository(ApprovalsRepository)
    public approvalsRepository: ApprovalsRepository,
  ) { }

  @post('/approvals-master')
  @response(200, {
    description: 'Approvals model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Approvals) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Approvals, {
            title: 'NewApprovals',
            exclude: ['id'],
          }),
        },
      },
    })
    approvals: Omit<Approvals, 'id'>,
  ): Promise<Approvals> {
    return this.approvalsRepository.create(approvals);
  }

  @get('/approvals-master/count')
  @response(200, {
    description: 'Approvals model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Approvals) where?: Where<Approvals>,
  ): Promise<Count> {
    return this.approvalsRepository.count(where);
  }

  @get('/approvals-master')
  @response(200, {
    description: 'Array of Approvals model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Approvals, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Approvals) filter?: Filter<Approvals>,
  ): Promise<Approvals[]> {
    return this.approvalsRepository.find(filter);
  }

  @patch('/approvals-master')
  @response(200, {
    description: 'Approvals PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Approvals, { partial: true }),
        },
      },
    })
    approvals: Approvals,
    @param.where(Approvals) where?: Where<Approvals>,
  ): Promise<Count> {
    return this.approvalsRepository.updateAll(approvals, where);
  }

  @get('/approvals-master/{id}')
  @response(200, {
    description: 'Approvals model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Approvals, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Approvals, { exclude: 'where' }) filter?: FilterExcludingWhere<Approvals>
  ): Promise<Approvals> {
    return this.approvalsRepository.findById(id, filter);
  }

  @patch('/approvals-master/{id}')
  @response(204, {
    description: 'Approvals PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Approvals, { partial: true }),
        },
      },
    })
    approvals: Approvals,
  ): Promise<void> {
    await this.approvalsRepository.updateById(id, approvals);
  }

  @put('/approvals-master/{id}')
  @response(204, {
    description: 'Approvals PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() approvals: Approvals,
  ): Promise<void> {
    await this.approvalsRepository.replaceById(id, approvals);
  }

  @del('/approvals-master/{id}')
  @response(204, {
    description: 'Approvals DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.approvalsRepository.deleteById(id);
  }
}
