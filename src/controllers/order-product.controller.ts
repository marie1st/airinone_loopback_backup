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
import {OrderProduct} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductController {
  constructor(
    @repository(OrderProductRepository)
    public orderProductRepository : OrderProductRepository,
  ) {}

  @post('/order-products', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderProduct)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProduct, {
            title: 'NewOrderProduct',
            
          }),
        },
      },
    })
    orderProduct: OrderProduct,
  ): Promise<OrderProduct> {
    return this.orderProductRepository.create(orderProduct);
  }

  @get('/order-products/count', {
    responses: {
      '200': {
        description: 'OrderProduct model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrderProduct) where?: Where<OrderProduct>,
  ): Promise<Count> {
    return this.orderProductRepository.count(where);
  }

  @get('/order-products', {
    responses: {
      '200': {
        description: 'Array of OrderProduct model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrderProduct, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrderProduct) filter?: Filter<OrderProduct>,
  ): Promise<OrderProduct[]> {
    return this.orderProductRepository.find(filter);
  }

  @patch('/order-products', {
    responses: {
      '200': {
        description: 'OrderProduct PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProduct, {partial: true}),
        },
      },
    })
    orderProduct: OrderProduct,
    @param.where(OrderProduct) where?: Where<OrderProduct>,
  ): Promise<Count> {
    return this.orderProductRepository.updateAll(orderProduct, where);
  }

  @get('/order-products/{id}', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrderProduct, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OrderProduct, {exclude: 'where'}) filter?: FilterExcludingWhere<OrderProduct>
  ): Promise<OrderProduct> {
    return this.orderProductRepository.findById(id, filter);
  }

  @patch('/order-products/{id}', {
    responses: {
      '204': {
        description: 'OrderProduct PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProduct, {partial: true}),
        },
      },
    })
    orderProduct: OrderProduct,
  ): Promise<void> {
    await this.orderProductRepository.updateById(id, orderProduct);
  }

  @put('/order-products/{id}', {
    responses: {
      '204': {
        description: 'OrderProduct PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() orderProduct: OrderProduct,
  ): Promise<void> {
    await this.orderProductRepository.replaceById(id, orderProduct);
  }

  @del('/order-products/{id}', {
    responses: {
      '204': {
        description: 'OrderProduct DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.orderProductRepository.deleteById(id);
  }
}
