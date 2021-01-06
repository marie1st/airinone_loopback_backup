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
import {WithdrawUsedEquipment} from '../models';
import {WithdrawUsedEquipmentRepository} from '../repositories';

export class WithdrawUsedEquipmentController {
  constructor(
    @repository(WithdrawUsedEquipmentRepository)
    public withdrawUsedEquipmentRepository : WithdrawUsedEquipmentRepository,
  ) {}

  @post('/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'WithdrawUsedEquipment model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawUsedEquipment)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawUsedEquipment, {
            title: 'NewWithdrawUsedEquipment',
            
          }),
        },
      },
    })
    withdrawUsedEquipment: WithdrawUsedEquipment,
  ): Promise<WithdrawUsedEquipment> {
    return this.withdrawUsedEquipmentRepository.create(withdrawUsedEquipment);
  }

  @get('/withdraw-used-equipments/count', {
    responses: {
      '200': {
        description: 'WithdrawUsedEquipment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(WithdrawUsedEquipment) where?: Where<WithdrawUsedEquipment>,
  ): Promise<Count> {
    return this.withdrawUsedEquipmentRepository.count(where);
  }

  @get('/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'Array of WithdrawUsedEquipment model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WithdrawUsedEquipment, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WithdrawUsedEquipment) filter?: Filter<WithdrawUsedEquipment>,
  ): Promise<WithdrawUsedEquipment[]> {
    return this.withdrawUsedEquipmentRepository.find(filter);
  }

  @patch('/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'WithdrawUsedEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawUsedEquipment, {partial: true}),
        },
      },
    })
    withdrawUsedEquipment: WithdrawUsedEquipment,
    @param.where(WithdrawUsedEquipment) where?: Where<WithdrawUsedEquipment>,
  ): Promise<Count> {
    return this.withdrawUsedEquipmentRepository.updateAll(withdrawUsedEquipment, where);
  }

  @get('/withdraw-used-equipments/{id}', {
    responses: {
      '200': {
        description: 'WithdrawUsedEquipment model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WithdrawUsedEquipment, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WithdrawUsedEquipment, {exclude: 'where'}) filter?: FilterExcludingWhere<WithdrawUsedEquipment>
  ): Promise<WithdrawUsedEquipment> {
    return this.withdrawUsedEquipmentRepository.findById(id, filter);
  }

  @patch('/withdraw-used-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawUsedEquipment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawUsedEquipment, {partial: true}),
        },
      },
    })
    withdrawUsedEquipment: WithdrawUsedEquipment,
  ): Promise<void> {
    await this.withdrawUsedEquipmentRepository.updateById(id, withdrawUsedEquipment);
  }

  @put('/withdraw-used-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawUsedEquipment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() withdrawUsedEquipment: WithdrawUsedEquipment,
  ): Promise<void> {
    await this.withdrawUsedEquipmentRepository.replaceById(id, withdrawUsedEquipment);
  }

  @del('/withdraw-used-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawUsedEquipment DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.withdrawUsedEquipmentRepository.deleteById(id);
  }
}
