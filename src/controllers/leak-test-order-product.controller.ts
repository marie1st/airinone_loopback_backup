import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  LeakTest,
  OrderProduct,
} from '../models';
import {LeakTestRepository} from '../repositories';

export class LeakTestOrderProductController {
  constructor(
    @repository(LeakTestRepository)
    public leakTestRepository: LeakTestRepository,
  ) { }

  @get('/leak-tests/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to LeakTest',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof LeakTest.prototype.id,
  ): Promise<OrderProduct> {
    return this.leakTestRepository.OrderProduct(id);
  }
}
