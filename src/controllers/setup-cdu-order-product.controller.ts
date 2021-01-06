import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupCdu,
  OrderProduct,
} from '../models';
import {SetupCduRepository} from '../repositories';

export class SetupCduOrderProductController {
  constructor(
    @repository(SetupCduRepository)
    public setupCduRepository: SetupCduRepository,
  ) { }

  @get('/setup-cdus/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupCdu',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupCdu.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupCduRepository.OrderProduct(id);
  }
}
