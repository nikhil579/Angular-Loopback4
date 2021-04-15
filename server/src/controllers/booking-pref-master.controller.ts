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
import { BookingPref } from '../models';
import { BookingPrefRepository } from '../repositories';

export class BookingPrefController {
  constructor(
    @repository(BookingPrefRepository)
    public bookingPrefRepository: BookingPrefRepository,
  ) { }

  @post('/booking-pref-master')
  @response(200, {
    description: 'BookingPref model instance',
    content: { 'application/json': { schema: getModelSchemaRef(BookingPref) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPref, {
            title: 'NewBookingPref',
            exclude: ['id'],
          }),
        },
      },
    })
    bookingPref: Omit<BookingPref, 'id'>,
  ): Promise<BookingPref> {
    return this.bookingPrefRepository.create(bookingPref);
  }

  @get('/booking-pref-master/count')
  @response(200, {
    description: 'BookingPref model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(BookingPref) where?: Where<BookingPref>,
  ): Promise<Count> {
    return this.bookingPrefRepository.count(where);
  }

  @get('/booking-pref-master')
  @response(200, {
    description: 'Array of BookingPref model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BookingPref, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(BookingPref) filter?: Filter<BookingPref>,
  ): Promise<BookingPref[]> {
    return this.bookingPrefRepository.find(filter);
  }

  @patch('/booking-pref-master')
  @response(200, {
    description: 'BookingPref PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPref, { partial: true }),
        },
      },
    })
    bookingPref: BookingPref,
    @param.where(BookingPref) where?: Where<BookingPref>,
  ): Promise<Count> {
    return this.bookingPrefRepository.updateAll(bookingPref, where);
  }

  @get('/booking-pref-master/{id}')
  @response(200, {
    description: 'BookingPref model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BookingPref, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BookingPref, { exclude: 'where' }) filter?: FilterExcludingWhere<BookingPref>
  ): Promise<BookingPref> {
    return this.bookingPrefRepository.findById(id, filter);
  }

  @patch('/booking-pref-master/{id}')
  @response(204, {
    description: 'BookingPref PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BookingPref, { partial: true }),
        },
      },
    })
    bookingPref: BookingPref,
  ): Promise<void> {
    await this.bookingPrefRepository.updateById(id, bookingPref);
  }

  @put('/booking-pref-master/{id}')
  @response(204, {
    description: 'BookingPref PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() bookingPref: BookingPref,
  ): Promise<void> {
    await this.bookingPrefRepository.replaceById(id, bookingPref);
  }

  @del('/booking-pref-master/{id}')
  @response(204, {
    description: 'BookingPref DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.bookingPrefRepository.deleteById(id);
  }
}
