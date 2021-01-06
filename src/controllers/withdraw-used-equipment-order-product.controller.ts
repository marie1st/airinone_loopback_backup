import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  WithdrawUsedEquipment,
  OrderProduct,
} from '../models';
import {WithdrawUsedEquipmentRepository} from '../repositories';

export class WithdrawUsedEquipmentOrderProductController {
  constructor(
    @repository(WithdrawUsedEquipmentRepository)
    public withdrawUsedEquipmentRepository: WithdrawUsedEquipmentRepository,
  ) { }

  @get('/withdraw-used-equipments/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to WithdrawUsedEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof WithdrawUsedEquipment.prototype.id,
  ): Promise<OrderProduct> {
    return this.withdrawUsedEquipmentRepository.OrderProduct(id);
  }
}
