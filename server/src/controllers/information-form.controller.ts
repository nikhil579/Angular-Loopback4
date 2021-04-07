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
import {InformationForm} from '../models';
import {InformationFormRepository} from '../repositories';

export class InformationFormController {
  constructor(
    @repository(InformationFormRepository)
    public informationFormRepository : InformationFormRepository,
  ) {}

  @post('/information-forms')
  @response(200, {
    description: 'InformationForm model instance',
    content: {'application/json': {schema: getModelSchemaRef(InformationForm)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationForm, {
            title: 'NewInformationForm',
            exclude: ['id'],
          }),
        },
      },
    })
    informationForm: Omit<InformationForm, 'id'>,
  ): Promise<InformationForm> {
    return this.informationFormRepository.create(informationForm);
  }

  @get('/information-forms/count')
  @response(200, {
    description: 'InformationForm model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InformationForm) where?: Where<InformationForm>,
  ): Promise<Count> {
    return this.informationFormRepository.count(where);
  }

  @get('/information-forms')
  @response(200, {
    description: 'Array of InformationForm model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InformationForm, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InformationForm) filter?: Filter<InformationForm>,
  ): Promise<InformationForm[]> {
    return this.informationFormRepository.find(filter);
  }

  @patch('/information-forms')
  @response(200, {
    description: 'InformationForm PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationForm, {partial: true}),
        },
      },
    })
    informationForm: InformationForm,
    @param.where(InformationForm) where?: Where<InformationForm>,
  ): Promise<Count> {
    return this.informationFormRepository.updateAll(informationForm, where);
  }

  @get('/information-forms/{id}')
  @response(200, {
    description: 'InformationForm model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InformationForm, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InformationForm, {exclude: 'where'}) filter?: FilterExcludingWhere<InformationForm>
  ): Promise<InformationForm> {
    return this.informationFormRepository.findById(id, filter);
  }

  @patch('/information-forms/{id}')
  @response(204, {
    description: 'InformationForm PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformationForm, {partial: true}),
        },
      },
    })
    informationForm: InformationForm,
  ): Promise<void> {
    await this.informationFormRepository.updateById(id, informationForm);
  }

  @put('/information-forms/{id}')
  @response(204, {
    description: 'InformationForm PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() informationForm: InformationForm,
  ): Promise<void> {
    await this.informationFormRepository.replaceById(id, informationForm);
  }

  @del('/information-forms/{id}')
  @response(204, {
    description: 'InformationForm DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.informationFormRepository.deleteById(id);
  }
}
