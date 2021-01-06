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
} from '@loopback/rest';
import {UsedEquipment} from '../models';
import {UsedEquipmentRepository} from '../repositories';

export class UsedEquipmentController {
  constructor(
    @repository(UsedEquipmentRepository)
    public usedEquipmentRepository : UsedEquipmentRepository,
  ) {}

  @post('/used-equipments', {
    responses: {
      '200': {
        description: 'UsedEquipment model instance',
        content: {'application/json': {schema: getModelSchemaRef(UsedEquipment)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsedEquipment, {
            title: 'NewUsedEquipment',
            
          }),
        },
      },
    })
    usedEquipment: UsedEquipment,
  ): Promise<UsedEquipment> {
    return this.usedEquipmentRepository.create(usedEquipment);
  }

  @get('/used-equipments/count', {
    responses: {
      '200': {
        description: 'UsedEquipment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UsedEquipment) where?: Where<UsedEquipment>,
  ): Promise<Count> {
    return this.usedEquipmentRepository.count(where);
  }

  @get('/used-equipments', {
    responses: {
      '200': {
        description: 'Array of UsedEquipment model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UsedEquipment, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UsedEquipment) filter?: Filter<UsedEquipment>,
  ): Promise<UsedEquipment[]> {
    return this.usedEquipmentRepository.find(filter);
  }

  @patch('/used-equipments', {
    responses: {
      '200': {
        description: 'UsedEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsedEquipment, {partial: true}),
        },
      },
    })
    usedEquipment: UsedEquipment,
    @param.where(UsedEquipment) where?: Where<UsedEquipment>,
  ): Promise<Count> {
    return this.usedEquipmentRepository.updateAll(usedEquipment, where);
  }

  @get('/used-equipments/{id}', {
    responses: {
      '200': {
        description: 'UsedEquipment model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UsedEquipment, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsedEquipment, {exclude: 'where'}) filter?: FilterExcludingWhere<UsedEquipment>
  ): Promise<UsedEquipment> {
    return this.usedEquipmentRepository.findById(id, filter);
  }

  @patch('/used-equipments/{id}', {
    responses: {
      '204': {
        description: 'UsedEquipment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsedEquipment, {partial: true}),
        },
      },
    })
    usedEquipment: UsedEquipment,
  ): Promise<void> {
    await this.usedEquipmentRepository.updateById(id, usedEquipment);
  }

  @put('/used-equipments/{id}', {
    responses: {
      '204': {
        description: 'UsedEquipment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usedEquipment: UsedEquipment,
  ): Promise<void> {
    await this.usedEquipmentRepository.replaceById(id, usedEquipment);
  }

  @del('/used-equipments/{id}', {
    responses: {
      '204': {
        description: 'UsedEquipment DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usedEquipmentRepository.deleteById(id);
  }
}
