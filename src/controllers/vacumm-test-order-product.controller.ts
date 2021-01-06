import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  VacummTest,
  OrderProduct,
} from '../models';
import {VacummTestRepository} from '../repositories';

export class VacummTestOrderProductController {
  constructor(
    @repository(VacummTestRepository)
    public vacummTestRepository: VacummTestRepository,
  ) { }

  @get('/vacumm-tests/{id}/order-product', {
    responses: {
      '200': {
        description: 'OrderProduct belonging to VacummTest',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async getOrderProduct(
    @param.path.number('id') id: typeof VacummTest.prototype.id,
  ): Promise<OrderProduct> {
    return this.vacummTestRepository.OrderProduct(id);
  }
}
