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
import {BookingPrefMaster} from '../models';
import {BookingPrefMasterRepository} from '../repositories';

export class BookingPrefMasterController {
  constructor(
    @repository(BookingPrefMasterRepository)
    public bookingPrefMasterRepository : BookingPrefMasterRepository,
  ) {}

  @post('/booking-pref-masters')
  @response(200, {
    description: 'BookingPrefMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(BookingPrefMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPrefMaster, {
            title: 'NewBookingPrefMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    bookingPrefMaster: Omit<BookingPrefMaster, 'id'>,
  ): Promise<BookingPrefMaster> {
    return this.bookingPrefMasterRepository.create(bookingPrefMaster);
  }

  @get('/booking-pref-masters/count')
  @response(200, {
    description: 'BookingPrefMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BookingPrefMaster) where?: Where<BookingPrefMaster>,
  ): Promise<Count> {
    return this.bookingPrefMasterRepository.count(where);
  }

  @get('/booking-pref-masters')
  @response(200, {
    description: 'Array of BookingPrefMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BookingPrefMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BookingPrefMaster) filter?: Filter<BookingPrefMaster>,
  ): Promise<BookingPrefMaster[]> {
    return this.bookingPrefMasterRepository.find(filter);
  }

  @patch('/booking-pref-masters')
  @response(200, {
    description: 'BookingPrefMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPrefMaster, {partial: true}),
        },
      },
    })
    bookingPrefMaster: BookingPrefMaster,
    @param.where(BookingPrefMaster) where?: Where<BookingPrefMaster>,
  ): Promise<Count> {
    return this.bookingPrefMasterRepository.updateAll(bookingPrefMaster, where);
  }

  @get('/booking-pref-masters/{id}')
  @response(200, {
    description: 'BookingPrefMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BookingPrefMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BookingPrefMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BookingPrefMaster>
  ): Promise<BookingPrefMaster> {
    return this.bookingPrefMasterRepository.findById(id, filter);
  }

  @patch('/booking-pref-masters/{id}')
  @response(204, {
    description: 'BookingPrefMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPrefMaster, {partial: true}),
        },
      },
    })
    bookingPrefMaster: BookingPrefMaster,
  ): Promise<void> {
    await this.bookingPrefMasterRepository.updateById(id, bookingPrefMaster);
  }

  @put('/booking-pref-masters/{id}')
  @response(204, {
    description: 'BookingPrefMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bookingPrefMaster: BookingPrefMaster,
  ): Promise<void> {
    await this.bookingPrefMasterRepository.replaceById(id, bookingPrefMaster);
  }

  @del('/booking-pref-masters/{id}')
  @response(204, {
    description: 'BookingPrefMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bookingPrefMasterRepository.deleteById(id);
  }
}
