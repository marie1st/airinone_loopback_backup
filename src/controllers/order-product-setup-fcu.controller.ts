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
  SetupFcu,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupFcuController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-fcu', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupFcu',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupFcu),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupFcu>,
  ): Promise<SetupFcu> {
    return this.orderProductRepository.setupFcu(id).get(filter);
  }

  @post('/order-products/{id}/setup-fcu', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupFcu)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFcu, {
            title: 'NewSetupFcuInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupFcu: Omit<SetupFcu, 'id'>,
  ): Promise<SetupFcu> {
    return this.orderProductRepository.setupFcu(id).create(setupFcu);
  }

  @patch('/order-products/{id}/setup-fcu', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupFcu PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFcu, {partial: true}),
        },
      },
    })
    setupFcu: Partial<SetupFcu>,
    @param.query.object('where', getWhereSchemaFor(SetupFcu)) where?: Where<SetupFcu>,
  ): Promise<Count> {
    return this.orderProductRepository.setupFcu(id).patch(setupFcu, where);
  }

  @del('/order-products/{id}/setup-fcu', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupFcu DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupFcu)) where?: Where<SetupFcu>,
  ): Promise<Count> {
    return this.orderProductRepository.setupFcu(id).delete(where);
  }
}
