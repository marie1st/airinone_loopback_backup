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
  SetupPipe,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupPipeController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-pipe', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupPipe',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupPipe),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupPipe>,
  ): Promise<SetupPipe> {
    return this.orderProductRepository.setupPipe(id).get(filter);
  }

  @post('/order-products/{id}/setup-pipe', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupPipe)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupPipe, {
            title: 'NewSetupPipeInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupPipe: Omit<SetupPipe, 'id'>,
  ): Promise<SetupPipe> {
    return this.orderProductRepository.setupPipe(id).create(setupPipe);
  }

  @patch('/order-products/{id}/setup-pipe', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupPipe PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupPipe, {partial: true}),
        },
      },
    })
    setupPipe: Partial<SetupPipe>,
    @param.query.object('where', getWhereSchemaFor(SetupPipe)) where?: Where<SetupPipe>,
  ): Promise<Count> {
    return this.orderProductRepository.setupPipe(id).patch(setupPipe, where);
  }

  @del('/order-products/{id}/setup-pipe', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupPipe DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupPipe)) where?: Where<SetupPipe>,
  ): Promise<Count> {
    return this.orderProductRepository.setupPipe(id).delete(where);
  }
}
