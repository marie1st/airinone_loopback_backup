import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupProcessPic,
  OrderProduct,
} from '../models';
import {SetupProcessPicRepository} from '../repositories';

export class SetupProcessPicOrderProductController {
  constructor(
    @repository(SetupProcessPicRepository)
    public setupProcessPicRepository: SetupProcessPicRepository,
  ) { }

  @get('/setup-process-pics/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to SetupProcessPic',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof SetupProcessPic.prototype.id,
  ): Promise<OrderProduct> {
    return this.setupProcessPicRepository.OrderProduct(id);
  }
}
