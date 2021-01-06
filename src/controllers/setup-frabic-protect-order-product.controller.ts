import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupFrabicProtect,
  OrderProduct,
} from '../models';
import {SetupFrabicProtectRepository} from '../repositories';

export class SetupFrabicProtectOrderProductController {
  constructor(
    @repository(SetupFrabicProtectRepository)
    public setupFrabicProtectRepository: SetupFrabicProtectRepository,
  ) { }

  @get('/setup-frabic-protects/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupFrabicProtect',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupFrabicProtect.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupFrabicProtectRepository.OrderProduct(id);
  }
}
