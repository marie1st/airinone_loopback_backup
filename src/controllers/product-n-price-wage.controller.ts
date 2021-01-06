import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProductNPrice,
  Wage,
} from '../models';
import {ProductNPriceRepository} from '../repositories';

export class ProductNPriceWageController {
  constructor(
    @repository(ProductNPriceRepository)
    public productNPriceRepository: ProductNPriceRepository,
  ) { }

  @get('/product-n-prices/{id}/wage', {
    responses: {
      '200': {
        description: 'Wage belonging to ProductNPrice',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Wage)},
          },
        },
      },
    },
  })
  async getWage(
    @param.path.number('id') id: typeof ProductNPrice.prototype.id,
  ): Promise<Wage> {
    return this.productNPriceRepository.Wage(id);
  }
}
