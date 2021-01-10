import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  MechanicalEquipment,
  WithdrawMechanicalEquipment,
} from '../models';
import {MechanicalEquipmentRepository} from '../repositories';

export class MechanicalEquipmentWithdrawMechanicalEquipmentController {
  constructor(
    @repository(MechanicalEquipmentRepository) protected mechanicalEquipmentRepository: MechanicalEquipmentRepository,
  ) { }

  @get('/mechanical-equipments/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'Array of MechanicalEquipment has many WithdrawMechanicalEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WithdrawMechanicalEquipment)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<WithdrawMechanicalEquipment>,
  ): Promise<WithdrawMechanicalEquipment[]> {
    return this.mechanicalEquipmentRepository.withdrawMechanicalEquipments(id).find(filter);
  }

  @post('/mechanical-equipments/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'MechanicalEquipment model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawMechanicalEquipment)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof MechanicalEquipment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {
            title: 'NewWithdrawMechanicalEquipmentInMechanicalEquipment',
            exclude: ['id'],
            optional: ['meid']
          }),
        },
      },
    }) withdrawMechanicalEquipment: Omit<WithdrawMechanicalEquipment, 'id'>,
  ): Promise<WithdrawMechanicalEquipment> {
    return this.mechanicalEquipmentRepository.withdrawMechanicalEquipments(id).create(withdrawMechanicalEquipment);
  }

  @patch('/mechanical-equipments/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'MechanicalEquipment.WithdrawMechanicalEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {partial: true}),
        },
      },
    })
    withdrawMechanicalEquipment: Partial<WithdrawMechanicalEquipment>,
    @param.query.object('where', getWhereSchemaFor(WithdrawMechanicalEquipment)) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.mechanicalEquipmentRepository.withdrawMechanicalEquipments(id).patch(withdrawMechanicalEquipment, where);
  }

  @del('/mechanical-equipments/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'MechanicalEquipment.WithdrawMechanicalEquipment DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(WithdrawMechanicalEquipment)) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.mechanicalEquipmentRepository.withdrawMechanicalEquipments(id).delete(where);
  }
}
