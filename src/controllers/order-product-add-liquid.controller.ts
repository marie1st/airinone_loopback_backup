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
  OrderProduct,
  AddLiquid,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductAddLiquidController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/add-liquid', {
    responses: {
      '200': {
        description: 'OrderProduct has one AddLiquid',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AddLiquid),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<AddLiquid>,
  ): Promise<AddLiquid> {
    return this.orderProductRepository.addLiquid(id).get(filter);
  }

  @post('/order-products/{id}/add-liquid', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(AddLiquid)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AddLiquid, {
            title: 'NewAddLiquidInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) addLiquid: Omit<AddLiquid, 'id'>,
  ): Promise<AddLiquid> {
    return this.orderProductRepository.addLiquid(id).create(addLiquid);
  }

  @patch('/order-products/{id}/add-liquid', {
    responses: {
      '200': {
        description: 'OrderProduct.AddLiquid PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AddLiquid, {partial: true}),
        },
      },
    })
    addLiquid: Partial<AddLiquid>,
    @param.query.object('where', getWhereSchemaFor(AddLiquid)) where?: Where<AddLiquid>,
  ): Promise<Count> {
    return this.orderProductRepository.addLiquid(id).patch(addLiquid, where);
  }

  @del('/order-products/{id}/add-liquid', {
    responses: {
      '200': {
        description: 'OrderProduct.AddLiquid DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(AddLiquid)) where?: Where<AddLiquid>,
  ): Promise<Count> {
    return this.orderProductRepository.addLiquid(id).delete(where);
  }
}
