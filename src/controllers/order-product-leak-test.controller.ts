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
  LeakTest,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductLeakTestController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/leak-test', {
    responses: {
      '200': {
        description: 'OrderProduct has one LeakTest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LeakTest),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<LeakTest>,
  ): Promise<LeakTest> {
    return this.orderProductRepository.leakTest(id).get(filter);
  }

  @post('/order-products/{id}/leak-test', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(LeakTest)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeakTest, {
            title: 'NewLeakTestInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) leakTest: Omit<LeakTest, 'id'>,
  ): Promise<LeakTest> {
    return this.orderProductRepository.leakTest(id).create(leakTest);
  }

  @patch('/order-products/{id}/leak-test', {
    responses: {
      '200': {
        description: 'OrderProduct.LeakTest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeakTest, {partial: true}),
        },
      },
    })
    leakTest: Partial<LeakTest>,
    @param.query.object('where', getWhereSchemaFor(LeakTest)) where?: Where<LeakTest>,
  ): Promise<Count> {
    return this.orderProductRepository.leakTest(id).patch(leakTest, where);
  }

  @del('/order-products/{id}/leak-test', {
    responses: {
      '200': {
        description: 'OrderProduct.LeakTest DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(LeakTest)) where?: Where<LeakTest>,
  ): Promise<Count> {
    return this.orderProductRepository.leakTest(id).delete(where);
  }
}
