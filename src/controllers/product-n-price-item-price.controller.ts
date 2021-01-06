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
  ItemPrice,
} from '../models';
import {ProductNPriceRepository} from '../repositories';

export class ProductNPriceItemPriceController {
  constructor(
    @repository(ProductNPriceRepository)
    public productNPriceRepository: ProductNPriceRepository,
  ) { }

  @get('/product-n-prices/{id}/item-price', {
    responses: {
      '200': {
        description: 'ItemPrice belonging to ProductNPrice',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ItemPrice)},
          },
        },
      },
    },
  })
  async getItemPrice(
    @param.path.number('id') id: typeof ProductNPrice.prototype.id,
  ): Promise<ItemPrice> {
    return this.productNPriceRepository.ItemPrice(id);
  }
}
