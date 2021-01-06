import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Warehouse} from '../models';
import {WarehouseRepository} from '../repositories';

export class WarehouseController {
  constructor(
    @repository(WarehouseRepository)
    public warehouseRepository : WarehouseRepository,
  ) {}

  @post('/warehouses', {
    responses: {
      '200': {
        description: 'Warehouse model instance',
        content: {'application/json': {schema: getModelSchemaRef(Warehouse)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {
            title: 'NewWarehouse',

          }),
        },
      },
    })
    warehouse: Warehouse,
  ): Promise<Warehouse> {
    return this.warehouseRepository.create(warehouse);
  }

  @get('/warehouses/count', {
    responses: {
      '200': {
        description: 'Warehouse model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Warehouse) where?: Where<Warehouse>,
  ): Promise<Count> {
    return this.warehouseRepository.count(where);
  }

  @get('/warehouses', {
    responses: {
      '200': {
        description: 'Array of Warehouse model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Warehouse, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Warehouse) filter?: Filter<Warehouse>,
  ): Promise<Warehouse[]> {
    return this.warehouseRepository.find(filter);
  }

  @patch('/warehouses', {
    responses: {
      '200': {
        description: 'Warehouse PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {partial: true}),
        },
      },
    })
    warehouse: Warehouse,
    @param.where(Warehouse) where?: Where<Warehouse>,
  ): Promise<Count> {
    return this.warehouseRepository.updateAll(warehouse, where);
  }

  @get('/warehouses/{id}', {
    responses: {
      '200': {
        description: 'Warehouse model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Warehouse, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: number,
    @param.filter(Warehouse, {exclude: 'where'}) filter?: FilterExcludingWhere<Warehouse>
  ): Promise<Warehouse> {
    return this.warehouseRepository.findById(id, filter);
  }

  @patch('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehouse, {partial: true}),
        },
      },
    })
    warehouse: Warehouse,
  ): Promise<void> {
    await this.warehouseRepository.updateById(id, warehouse);
  }

  @put('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: number,
    @requestBody() warehouse: Warehouse,
  ): Promise<void> {
    await this.warehouseRepository.replaceById(id, warehouse);
  }

  @del('/warehouses/{id}', {
    responses: {
      '204': {
        description: 'Warehouse DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: number): Promise<void> {
    await this.warehouseRepository.deleteById(id);
  }
}
