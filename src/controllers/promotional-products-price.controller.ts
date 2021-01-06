import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {PromotionalProductsPrice} from '../models';
import {PromotionalProductsPriceRepository} from '../repositories';

export class PromotionalProductsPriceController {
  constructor(
    @repository(PromotionalProductsPriceRepository)
    public promotionalProductsPriceRepository : PromotionalProductsPriceRepository,
  ) {}

  @post('/promotional-products-prices', {
    responses: {
      '200': {
        description: 'PromotionalProductsPrice model instance',
        content: {'application/json': {schema: getModelSchemaRef(PromotionalProductsPrice)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPrice, {
            title: 'NewPromotionalProductsPrice',

          }),
        },
      },
    })
    promotionalProductsPrice: PromotionalProductsPrice,
  ): Promise<PromotionalProductsPrice> {
    return this.promotionalProductsPriceRepository.create(promotionalProductsPrice);
  }

  @get('/promotional-products-prices/count', {
    responses: {
      '200': {
        description: 'PromotionalProductsPrice model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PromotionalProductsPrice) where?: Where<PromotionalProductsPrice>,
  ): Promise<Count> {
    return this.promotionalProductsPriceRepository.count(where);
  }

  @get('/promotional-products-prices', {
    responses: {
      '200': {
        description: 'Array of PromotionalProductsPrice model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PromotionalProductsPrice, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PromotionalProductsPrice) filter?: Filter<PromotionalProductsPrice>,
  ): Promise<PromotionalProductsPrice[]> {
    return this.promotionalProductsPriceRepository.find(filter);
  }

  @patch('/promotional-products-prices', {
    responses: {
      '200': {
        description: 'PromotionalProductsPrice PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPrice, {partial: true}),
        },
      },
    })
    promotionalProductsPrice: PromotionalProductsPrice,
    @param.where(PromotionalProductsPrice) where?: Where<PromotionalProductsPrice>,
  ): Promise<Count> {
    return this.promotionalProductsPriceRepository.updateAll(promotionalProductsPrice, where);
  }

  @get('/promotional-products-prices/{id}', {
    responses: {
      '200': {
        description: 'PromotionalProductsPrice model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PromotionalProductsPrice, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PromotionalProductsPrice, {exclude: 'where'}) filter?: FilterExcludingWhere<PromotionalProductsPrice>
  ): Promise<PromotionalProductsPrice> {
    return this.promotionalProductsPriceRepository.findById(id, filter);
  }

  @patch('/promotional-products-prices/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPrice PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPrice, {partial: true}),
        },
      },
    })
    promotionalProductsPrice: PromotionalProductsPrice,
  ): Promise<void> {
    await this.promotionalProductsPriceRepository.updateById(id, promotionalProductsPrice);
  }

  @put('/promotional-products-prices/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPrice PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promotionalProductsPrice: PromotionalProductsPrice,
  ): Promise<void> {
    await this.promotionalProductsPriceRepository.replaceById(id, promotionalProductsPrice);
  }

  @del('/promotional-products-prices/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPrice DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promotionalProductsPriceRepository.deleteById(id);
  }
}
