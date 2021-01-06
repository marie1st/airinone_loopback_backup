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
  PremiumSetupCost,
} from '../models';
import {ProductNPriceRepository} from '../repositories';

export class ProductNPricePremiumSetupCostController {
  constructor(
    @repository(ProductNPriceRepository)
    public productNPriceRepository: ProductNPriceRepository,
  ) { }

  @get('/product-n-prices/{id}/premium-setup-cost', {
    responses: {
      '200': {
        description: 'PremiumSetupCost belonging to ProductNPrice',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PremiumSetupCost)},
          },
        },
      },
    },
  })
  async getPremiumSetupCost(
    @param.path.number('id') id: typeof ProductNPrice.prototype.id,
  ): Promise<PremiumSetupCost> {
    return this.productNPriceRepository.PremiiumSetupCost(id);
  }
}
