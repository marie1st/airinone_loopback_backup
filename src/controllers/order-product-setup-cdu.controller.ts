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
  SetupCdu,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupCduController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-cdu', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupCdu',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupCdu),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupCdu>,
  ): Promise<SetupCdu> {
    return this.orderProductRepository.setupCdu(id).get(filter);
  }

  @post('/order-products/{id}/setup-cdu', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupCdu)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCdu, {
            title: 'NewSetupCduInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupCdu: Omit<SetupCdu, 'id'>,
  ): Promise<SetupCdu> {
    return this.orderProductRepository.setupCdu(id).create(setupCdu);
  }

  @patch('/order-products/{id}/setup-cdu', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupCdu PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCdu, {partial: true}),
        },
      },
    })
    setupCdu: Partial<SetupCdu>,
    @param.query.object('where', getWhereSchemaFor(SetupCdu)) where?: Where<SetupCdu>,
  ): Promise<Count> {
    return this.orderProductRepository.setupCdu(id).patch(setupCdu, where);
  }

  @del('/order-products/{id}/setup-cdu', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupCdu DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupCdu)) where?: Where<SetupCdu>,
  ): Promise<Count> {
    return this.orderProductRepository.setupCdu(id).delete(where);
  }
}
