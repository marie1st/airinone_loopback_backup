import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  ItemPrice,
  ProductNPrice,
} from '../models';
import {ItemPriceRepository} from '../repositories';

export class ItemPriceProductNPriceController {
  constructor(
    @repository(ItemPriceRepository) protected itemPriceRepository: ItemPriceRepository,
  ) { }

  @get('/item-prices/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'ItemPrice has one ProductNPrice',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProductNPrice),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ProductNPrice>,
  ): Promise<ProductNPrice> {
    return this.itemPriceRepository.productNPrice(id).get(filter);
  }

  @post('/item-prices/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'ItemPrice model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductNPrice)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ItemPrice.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {
            title: 'NewProductNPriceInItemPrice',
            exclude: ['id'],
            optional: ['item_price_id']
          }),
        },
      },
    }) productNPrice: Omit<ProductNPrice, 'id'>,
  ): Promise<ProductNPrice> {
    return this.itemPriceRepository.productNPrice(id).create(productNPrice);
  }

  @patch('/item-prices/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'ItemPrice.ProductNPrice PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {partial: true}),
        },
      },
    })
    productNPrice: Partial<ProductNPrice>,
    @param.query.object('where', getWhereSchemaFor(ProductNPrice)) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.itemPriceRepository.productNPrice(id).patch(productNPrice, where);
  }

  @del('/item-prices/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'ItemPrice.ProductNPrice DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductNPrice)) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.itemPriceRepository.productNPrice(id).delete(where);
  }
}
