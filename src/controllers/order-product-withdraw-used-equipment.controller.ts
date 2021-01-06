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
  WithdrawUsedEquipment,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductWithdrawUsedEquipmentController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'Array of OrderProduct has many WithdrawUsedEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WithdrawUsedEquipment)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<WithdrawUsedEquipment>,
  ): Promise<WithdrawUsedEquipment[]> {
    return this.orderProductRepository.withdrawUsedEquipments(id).find(filter);
  }

  @post('/order-products/{id}/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawUsedEquipment)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawUsedEquipment, {
            title: 'NewWithdrawUsedEquipmentInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) withdrawUsedEquipment: Omit<WithdrawUsedEquipment, 'id'>,
  ): Promise<WithdrawUsedEquipment> {
    return this.orderProductRepository.withdrawUsedEquipments(id).create(withdrawUsedEquipment);
  }

  @patch('/order-products/{id}/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawUsedEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawUsedEquipment, {partial: true}),
        },
      },
    })
    withdrawUsedEquipment: Partial<WithdrawUsedEquipment>,
    @param.query.object('where', getWhereSchemaFor(WithdrawUsedEquipment)) where?: Where<WithdrawUsedEquipment>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawUsedEquipments(id).patch(withdrawUsedEquipment, where);
  }

  @del('/order-products/{id}/withdraw-used-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawUsedEquipment DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(WithdrawUsedEquipment)) where?: Where<WithdrawUsedEquipment>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawUsedEquipments(id).delete(where);
  }
}
