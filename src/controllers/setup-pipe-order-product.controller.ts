import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupPipe,
  OrderProduct,
} from '../models';
import {SetupPipeRepository} from '../repositories';

export class SetupPipeOrderProductController {
  constructor(
    @repository(SetupPipeRepository)
    public setupPipeRepository: SetupPipeRepository,
  ) { }

  @get('/setup-pipes/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupPipe',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupPipe.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupPipeRepository.OrderProduct(id);
  }
}
