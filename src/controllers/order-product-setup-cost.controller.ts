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
  SetupCost,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupCostController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-cost', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupCost',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupCost),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupCost>,
  ): Promise<SetupCost> {
    return this.orderProductRepository.setupCost(id).get(filter);
  }

  @post('/order-products/{id}/setup-cost', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupCost)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCost, {
            title: 'NewSetupCostInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupCost: Omit<SetupCost, 'id'>,
  ): Promise<SetupCost> {
    return this.orderProductRepository.setupCost(id).create(setupCost);
  }

  @patch('/order-products/{id}/setup-cost', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupCost PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCost, {partial: true}),
        },
      },
    })
    setupCost: Partial<SetupCost>,
    @param.query.object('where', getWhereSchemaFor(SetupCost)) where?: Where<SetupCost>,
  ): Promise<Count> {
    return this.orderProductRepository.setupCost(id).patch(setupCost, where);
  }

  @del('/order-products/{id}/setup-cost', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupCost DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupCost)) where?: Where<SetupCost>,
  ): Promise<Count> {
    return this.orderProductRepository.setupCost(id).delete(where);
  }
}
