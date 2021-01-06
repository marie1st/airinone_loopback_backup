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
  WithdrawMoney,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductWithdrawMoneyController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/withdraw-money', {
    responses: {
      '200': {
        description: 'OrderProduct has one WithdrawMoney',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WithdrawMoney),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<WithdrawMoney>,
  ): Promise<WithdrawMoney> {
    return this.orderProductRepository.withdrawMoney(id).get(filter);
  }

  @post('/order-products/{id}/withdraw-money', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawMoney)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMoney, {
            title: 'NewWithdrawMoneyInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) withdrawMoney: Omit<WithdrawMoney, 'id'>,
  ): Promise<WithdrawMoney> {
    return this.orderProductRepository.withdrawMoney(id).create(withdrawMoney);
  }

  @patch('/order-products/{id}/withdraw-money', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawMoney PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMoney, {partial: true}),
        },
      },
    })
    withdrawMoney: Partial<WithdrawMoney>,
    @param.query.object('where', getWhereSchemaFor(WithdrawMoney)) where?: Where<WithdrawMoney>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawMoney(id).patch(withdrawMoney, where);
  }

  @del('/order-products/{id}/withdraw-money', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawMoney DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(WithdrawMoney)) where?: Where<WithdrawMoney>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawMoney(id).delete(where);
  }
}
