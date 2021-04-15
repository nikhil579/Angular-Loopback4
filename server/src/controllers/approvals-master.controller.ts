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
import {ApprovalsMaster} from '../models';
import {ApprovalsMasterRepository} from '../repositories';

export class ApprovalsMasterController {
  constructor(
    @repository(ApprovalsMasterRepository)
    public approvalsMasterRepository : ApprovalsMasterRepository,
  ) {}

  @post('/approvals-masters')
  @response(200, {
    description: 'ApprovalsMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(ApprovalsMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalsMaster, {
            title: 'NewApprovalsMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    approvalsMaster: Omit<ApprovalsMaster, 'id'>,
  ): Promise<ApprovalsMaster> {
    return this.approvalsMasterRepository.create(approvalsMaster);
  }

  @get('/approvals-masters/count')
  @response(200, {
    description: 'ApprovalsMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ApprovalsMaster) where?: Where<ApprovalsMaster>,
  ): Promise<Count> {
    return this.approvalsMasterRepository.count(where);
  }

  @get('/approvals-masters')
  @response(200, {
    description: 'Array of ApprovalsMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ApprovalsMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ApprovalsMaster) filter?: Filter<ApprovalsMaster>,
  ): Promise<ApprovalsMaster[]> {
    return this.approvalsMasterRepository.find(filter);
  }

  @patch('/approvals-masters')
  @response(200, {
    description: 'ApprovalsMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalsMaster, {partial: true}),
        },
      },
    })
    approvalsMaster: ApprovalsMaster,
    @param.where(ApprovalsMaster) where?: Where<ApprovalsMaster>,
  ): Promise<Count> {
    return this.approvalsMasterRepository.updateAll(approvalsMaster, where);
  }

  @get('/approvals-masters/{id}')
  @response(200, {
    description: 'ApprovalsMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ApprovalsMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ApprovalsMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ApprovalsMaster>
  ): Promise<ApprovalsMaster> {
    return this.approvalsMasterRepository.findById(id, filter);
  }

  @patch('/approvals-masters/{id}')
  @response(204, {
    description: 'ApprovalsMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApprovalsMaster, {partial: true}),
        },
      },
    })
    approvalsMaster: ApprovalsMaster,
  ): Promise<void> {
    await this.approvalsMasterRepository.updateById(id, approvalsMaster);
  }

  @put('/approvals-masters/{id}')
  @response(204, {
    description: 'ApprovalsMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() approvalsMaster: ApprovalsMaster,
  ): Promise<void> {
    await this.approvalsMasterRepository.replaceById(id, approvalsMaster);
  }

  @del('/approvals-masters/{id}')
  @response(204, {
    description: 'ApprovalsMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.approvalsMasterRepository.deleteById(id);
  }
}
