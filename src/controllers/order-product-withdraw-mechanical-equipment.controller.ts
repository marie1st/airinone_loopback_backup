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
  WithdrawMechanicalEquipment,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductWithdrawMechanicalEquipmentController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'Array of OrderProduct has many WithdrawMechanicalEquipment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WithdrawMechanicalEquipment)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<WithdrawMechanicalEquipment>,
  ): Promise<WithdrawMechanicalEquipment[]> {
    return this.orderProductRepository.withdrawMechanicalEquipments(id).find(filter);
  }

  @post('/order-products/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawMechanicalEquipment)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {
            title: 'NewWithdrawMechanicalEquipmentInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) withdrawMechanicalEquipment: Omit<WithdrawMechanicalEquipment, 'id'>,
  ): Promise<WithdrawMechanicalEquipment> {
    return this.orderProductRepository.withdrawMechanicalEquipments(id).create(withdrawMechanicalEquipment);
  }

  @patch('/order-products/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawMechanicalEquipment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMechanicalEquipment, {partial: true}),
        },
      },
    })
    withdrawMechanicalEquipment: Partial<WithdrawMechanicalEquipment>,
    @param.query.object('where', getWhereSchemaFor(WithdrawMechanicalEquipment)) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawMechanicalEquipments(id).patch(withdrawMechanicalEquipment, where);
  }

  @del('/order-products/{id}/withdraw-mechanical-equipments', {
    responses: {
      '200': {
        description: 'OrderProduct.WithdrawMechanicalEquipment DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(WithdrawMechanicalEquipment)) where?: Where<WithdrawMechanicalEquipment>,
  ): Promise<Count> {
    return this.orderProductRepository.withdrawMechanicalEquipments(id).delete(where);
  }
}
