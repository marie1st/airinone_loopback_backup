import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupFcu,
  OrderProduct,
} from '../models';
import {SetupFcuRepository} from '../repositories';

export class SetupFcuOrderProductController {
  constructor(
    @repository(SetupFcuRepository)
    public setupFcuRepository: SetupFcuRepository,
  ) { }

  @get('/setup-fcus/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupFcu',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupFcu.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupFcuRepository.OrderProduct(id);
  }
}
