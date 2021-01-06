import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  AddLiquid,
  OrderProduct,
} from '../models';
import {AddLiquidRepository} from '../repositories';

export class AddLiquidOrderProductController {
  constructor(
    @repository(AddLiquidRepository)
    public addLiquidRepository: AddLiquidRepository,
  ) { }

  @get('/add-liquids/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to AddLiquid',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof AddLiquid.prototype.id,
  ): Promise<OrderProduct> {
    return this.addLiquidRepository.OrderProduct(id);
  }
}
