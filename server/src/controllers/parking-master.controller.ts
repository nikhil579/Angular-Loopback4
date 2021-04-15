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
import {ParkingMaster} from '../models';
import {ParkingMasterRepository} from '../repositories';

export class ParkingMasterController {
  constructor(
    @repository(ParkingMasterRepository)
    public parkingMasterRepository : ParkingMasterRepository,
  ) {}

  @post('/parking-masters')
  @response(200, {
    description: 'ParkingMaster model instance',
    content: {'application/json': {schema: getModelSchemaRef(ParkingMaster)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingMaster, {
            title: 'NewParkingMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    parkingMaster: Omit<ParkingMaster, 'id'>,
  ): Promise<ParkingMaster> {
    return this.parkingMasterRepository.create(parkingMaster);
  }

  @get('/parking-masters/count')
  @response(200, {
    description: 'ParkingMaster model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ParkingMaster) where?: Where<ParkingMaster>,
  ): Promise<Count> {
    return this.parkingMasterRepository.count(where);
  }

  @get('/parking-masters')
  @response(200, {
    description: 'Array of ParkingMaster model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ParkingMaster, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ParkingMaster) filter?: Filter<ParkingMaster>,
  ): Promise<ParkingMaster[]> {
    return this.parkingMasterRepository.find(filter);
  }

  @patch('/parking-masters')
  @response(200, {
    description: 'ParkingMaster PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingMaster, {partial: true}),
        },
      },
    })
    parkingMaster: ParkingMaster,
    @param.where(ParkingMaster) where?: Where<ParkingMaster>,
  ): Promise<Count> {
    return this.parkingMasterRepository.updateAll(parkingMaster, where);
  }

  @get('/parking-masters/{id}')
  @response(200, {
    description: 'ParkingMaster model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ParkingMaster, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ParkingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ParkingMaster>
  ): Promise<ParkingMaster> {
    return this.parkingMasterRepository.findById(id, filter);
  }

  @patch('/parking-masters/{id}')
  @response(204, {
    description: 'ParkingMaster PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingMaster, {partial: true}),
        },
      },
    })
    parkingMaster: ParkingMaster,
  ): Promise<void> {
    await this.parkingMasterRepository.updateById(id, parkingMaster);
  }

  @put('/parking-masters/{id}')
  @response(204, {
    description: 'ParkingMaster PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() parkingMaster: ParkingMaster,
  ): Promise<void> {
    await this.parkingMasterRepository.replaceById(id, parkingMaster);
  }

  @del('/parking-masters/{id}')
  @response(204, {
    description: 'ParkingMaster DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.parkingMasterRepository.deleteById(id);
  }
}
