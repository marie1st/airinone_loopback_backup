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
import {WithdrawMechanicalEquipment} from '../models';
import {WithdrawMechanicalEquipmentRepository} from '../repositories';

export class WithdrawMechanicalEquipmentController {
  constructor(
    @repository(WithdrawMechanicalEquipmentRepository)
    public withdrawMechanicalEquipmentRepository : WithdrawMechanicalEquipmentRepository,
  ) {}

  @post('/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'WithdrawMechanicalEquipment model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawMechanicalEquipment)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {
            title: 'NewWithdrawMechanicalEquipment',
            
          }),
        },
      },
    })
    withdrawMechanicalEquipment: WithdrawMechanicalEquipment,
  ): Promise<WithdrawMechanicalEquipment> {
    return this.withdrawMechanicalEquipmentRepository.create(withdrawMechanicalEquipment);
  }

  @get('/withdraw-mechanical-equipments/count', {
    responses: {
      '200': {
        description: 'WithdrawMechanicalEquipment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(WithdrawMechanicalEquipment) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.withdrawMechanicalEquipmentRepository.count(where);
  }

  @get('/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'Array of WithdrawMechanicalEquipment model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WithdrawMechanicalEquipment, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WithdrawMechanicalEquipment) filter?: Filter<WithdrawMechanicalEquipment>,
  ): Promise<WithdrawMechanicalEquipment[]> {
    return this.withdrawMechanicalEquipmentRepository.find(filter);
  }

  @patch('/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'WithdrawMechanicalEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {partial: true}),
        },
      },
    })
    withdrawMechanicalEquipment: WithdrawMechanicalEquipment,
    @param.where(WithdrawMechanicalEquipment) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.withdrawMechanicalEquipmentRepository.updateAll(withdrawMechanicalEquipment, where);
  }

  @get('/withdraw-mechanical-equipments/{id}', {
    responses: {
      '200': {
        description: 'WithdrawMechanicalEquipment model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WithdrawMechanicalEquipment, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WithdrawMechanicalEquipment, {exclude: 'where'}) filter?: FilterExcludingWhere<WithdrawMechanicalEquipment>
  ): Promise<WithdrawMechanicalEquipment> {
    return this.withdrawMechanicalEquipmentRepository.findById(id, filter);
  }

  @patch('/withdraw-mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMechanicalEquipment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {partial: true}),
        },
      },
    })
    withdrawMechanicalEquipment: WithdrawMechanicalEquipment,
  ): Promise<void> {
    await this.withdrawMechanicalEquipmentRepository.updateById(id, withdrawMechanicalEquipment);
  }

  @put('/withdraw-mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMechanicalEquipment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() withdrawMechanicalEquipment: WithdrawMechanicalEquipment,
  ): Promise<void> {
    await this.withdrawMechanicalEquipmentRepository.replaceById(id, withdrawMechanicalEquipment);
  }

  @del('/withdraw-mechanical-equipments/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMechanicalEquipment DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.withdrawMechanicalEquipmentRepository.deleteById(id);
  }
}
