import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  PipeSysNElec,
  OrderProduct,
} from '../models';
import {PipeSysNElecRepository} from '../repositories';

export class PipeSysNElecOrderProductController {
  constructor(
    @repository(PipeSysNElecRepository)
    public pipeSysNElecRepository: PipeSysNElecRepository,
  ) { }

  @get('/pipe-sys-n-elecs/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to PipeSysNElec',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof PipeSysNElec.prototype.id,
  ): Promise<OrderProduct> {
    return this.pipeSysNElecRepository.OrderProduct(id);
  }
}
