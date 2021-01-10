import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  WithdrawMechanicalEquipment,
  MechanicalEquipment,
} from '../models';
import {WithdrawMechanicalEquipmentRepository} from '../repositories';

export class WithdrawMechanicalEquipmentMechanicalEquipmentController {
  constructor(
    @repository(WithdrawMechanicalEquipmentRepository)
    public withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository,
  ) { }

  @get('/withdraw-mechanical-equipments/{id}/mechanical-equipment', {
    responses: {
      '200': {
        description: 'MechanicalEquipment belonging to WithdrawMechanicalEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MechanicalEquipment)},
          },
        },
      },
    },
  })
  async getMechanicalEquipment(
    @param.path.number('id') id: typeof WithdrawMechanicalEquipment.prototype.id,
  ): Promise<MechanicalEquipment> {
    return this.withdrawMechanicalEquipmentRepository.mechanicalwithdraw(id);
  }
}
