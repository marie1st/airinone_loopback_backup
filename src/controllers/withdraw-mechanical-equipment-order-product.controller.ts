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
  OrderProduct,
} from '../models';
import {WithdrawMechanicalEquipmentRepository} from '../repositories';

export class WithdrawMechanicalEquipmentOrderProductController {
  constructor(
    @repository(WithdrawMechanicalEquipmentRepository)
    public withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository,
  ) { }

  @get('/withdraw-mechanical-equipments/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to WithdrawMechanicalEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof WithdrawMechanicalEquipment.prototype.id,
  ): Promise<OrderProduct> {
    return this.withdrawMechanicalEquipmentRepository.OrderProduct(id);
  }
}
