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
  Wage,
  ProductNPrice,
} from '../models';
import {WageRepository} from '../repositories';

export class WageProductNPriceController {
  constructor(
    @repository(WageRepository) protected wageRepository: WageRepository,
  ) { }

  @get('/wages/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'Wage has one ProductNPrice',
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
    return this.wageRepository.productNPrice(id).get(filter);
  }

  @post('/wages/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'Wage model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductNPrice)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Wage.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {
            title: 'NewProductNPriceInWage',
            exclude: ['id'],
            optional: ['wage_id']
          }),
        },
      },
    }) productNPrice: Omit<ProductNPrice, 'id'>,
  ): Promise<ProductNPrice> {
    return this.wageRepository.productNPrice(id).create(productNPrice);
  }

  @patch('/wages/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'Wage.ProductNPrice PATCH success count',
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
    return this.wageRepository.productNPrice(id).patch(productNPrice, where);
  }

  @del('/wages/{id}/product-n-price', {
    responses: {
      '200': {
        description: 'Wage.ProductNPrice DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ProductNPrice)) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.wageRepository.productNPrice(id).delete(where);
  }
}
