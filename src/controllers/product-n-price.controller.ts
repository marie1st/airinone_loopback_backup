import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ProductNPrice} from '../models';
import {ProductNPriceRepository} from '../repositories';

export class ProductNPriceController {
  constructor(
    @repository(ProductNPriceRepository)
    public productNPriceRepository : ProductNPriceRepository,
  ) {}

  @post('/product-n-prices', {
    responses: {
      '200': {
        description: 'ProductNPrice model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProductNPrice)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {
            title: 'NewProductNPrice',
            
          }),
        },
      },
    })
    productNPrice: ProductNPrice,
  ): Promise<ProductNPrice> {
    return this.productNPriceRepository.create(productNPrice);
  }

  @get('/product-n-prices/count', {
    responses: {
      '200': {
        description: 'ProductNPrice model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProductNPrice) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.productNPriceRepository.count(where);
  }

  @get('/product-n-prices', {
    responses: {
      '200': {
        description: 'Array of ProductNPrice model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProductNPrice, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProductNPrice) filter?: Filter<ProductNPrice>,
  ): Promise<ProductNPrice[]> {
    return this.productNPriceRepository.find(filter);
  }

  @patch('/product-n-prices', {
    responses: {
      '200': {
        description: 'ProductNPrice PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {partial: true}),
        },
      },
    })
    productNPrice: ProductNPrice,
    @param.where(ProductNPrice) where?: Where<ProductNPrice>,
  ): Promise<Count> {
    return this.productNPriceRepository.updateAll(productNPrice, where);
  }

  @get('/product-n-prices/{id}', {
    responses: {
      '200': {
        description: 'ProductNPrice model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProductNPrice, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductNPrice, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductNPrice>
  ): Promise<ProductNPrice> {
    return this.productNPriceRepository.findById(id, filter);
  }

  @patch('/product-n-prices/{id}', {
    responses: {
      '204': {
        description: 'ProductNPrice PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductNPrice, {partial: true}),
        },
      },
    })
    productNPrice: ProductNPrice,
  ): Promise<void> {
    await this.productNPriceRepository.updateById(id, productNPrice);
  }

  @put('/product-n-prices/{id}', {
    responses: {
      '204': {
        description: 'ProductNPrice PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productNPrice: ProductNPrice,
  ): Promise<void> {
    await this.productNPriceRepository.replaceById(id, productNPrice);
  }

  @del('/product-n-prices/{id}', {
    responses: {
      '204': {
        description: 'ProductNPrice DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productNPriceRepository.deleteById(id);
  }
}
