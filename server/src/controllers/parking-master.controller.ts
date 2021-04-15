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
import { Parking } from '../models';
import { ParkingRepository } from '../repositories';

export class ParkingController {
  constructor(
    @repository(ParkingRepository)
    public parkingRepository: ParkingRepository,
  ) { }

  @post('/parking-master')
  @response(200, {
    description: 'Parking model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Parking) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parking, {
            title: 'NewParking',
            exclude: ['id'],
          }),
        },
      },
    })
    parking: Omit<Parking, 'id'>,
  ): Promise<Parking> {
    return this.parkingRepository.create(parking);
  }

  @get('/parking-master/count')
  @response(200, {
    description: 'Parking model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Parking) where?: Where<Parking>,
  ): Promise<Count> {
    return this.parkingRepository.count(where);
  }

  @get('/parking-master')
  @response(200, {
    description: 'Array of Parking model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Parking, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Parking) filter?: Filter<Parking>,
  ): Promise<Parking[]> {
    return this.parkingRepository.find(filter);
  }

  @patch('/parking-master')
  @response(200, {
    description: 'Parking PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parking, { partial: true }),
        },
      },
    })
    parking: Parking,
    @param.where(Parking) where?: Where<Parking>,
  ): Promise<Count> {
    return this.parkingRepository.updateAll(parking, where);
  }

  @get('/parking-master/{id}')
  @response(200, {
    description: 'Parking model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Parking, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Parking, { exclude: 'where' }) filter?: FilterExcludingWhere<Parking>
  ): Promise<Parking> {
    return this.parkingRepository.findById(id, filter);
  }

  @patch('/parking-master/{id}')
  @response(204, {
    description: 'Parking PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parking, { partial: true }),
        },
      },
    })
    parking: Parking,
  ): Promise<void> {
    await this.parkingRepository.updateById(id, parking);
  }

  @put('/parking-master/{id}')
  @response(204, {
    description: 'Parking PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() parking: Parking,
  ): Promise<void> {
    await this.parkingRepository.replaceById(id, parking);
  }

  @del('/parking-master/{id}')
  @response(204, {
    description: 'Parking DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.parkingRepository.deleteById(id);
  }
}
