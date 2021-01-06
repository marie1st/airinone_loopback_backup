import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupCost,
  OrderProduct,
} from '../models';
import {SetupCostRepository} from '../repositories';

export class SetupCostOrderProductController {
  constructor(
    @repository(SetupCostRepository)
    public setupCostRepository: SetupCostRepository,
  ) { }

  @get('/setup-costs/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupCost',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupCost.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupCostRepository.orderProduct(id);
  }
}
