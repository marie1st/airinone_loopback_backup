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
  PremiumSetupCost,
  ProductNPrice,
} from '../models';
import {PremiumSetupCostRepository} from '../repositories';

export class PremiumSetupCostProductNPriceController {
  constructor(
    @repository(PremiumSetupCostRepository) protected premiumSetupCostRepository: PremiumSetupCostRepository,
  ) { }

  @get('/premium-setup-costs/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'PremiumSetupCost has one ProductNPrice',
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
    return this.premiumSetupCostRepository.productNPrice(id).get(filter);
  }

  @post('/premium-setup-costs/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'PremiumSetupCost model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductNPrice)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof PremiumSetupCost.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {
            title: 'NewProductNPriceInPremiumSetupCost',
            exclude: ['id'],
            optional: ['premium_setup_id']
          }),
        },
      },
    }) productNPrice: Omit<ProductNPrice, 'id'>,
  ): Promise<ProductNPrice> {
    return this.premiumSetupCostRepository.productNPrice(id).create(productNPrice);
  }

  @patch('/premium-setup-costs/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'PremiumSetupCost.ProductNPrice PATCH success count',
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
    return this.premiumSetupCostRepository.productNPrice(id).patch(productNPrice, where);
  }

  @del('/premium-setup-costs/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'PremiumSetupCost.ProductNPrice DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductNPrice)) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.premiumSetupCostRepository.productNPrice(id).delete(where);
  }
}
