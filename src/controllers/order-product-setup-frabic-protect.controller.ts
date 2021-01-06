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
  SetupFrabicProtect,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupFrabicProtectController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-frabic-protect', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupFrabicProtect',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupFrabicProtect),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupFrabicProtect>,
  ): Promise<SetupFrabicProtect> {
    return this.orderProductRepository.setupFrabicProtect(id).get(filter);
  }

  @post('/order-products/{id}/setup-frabic-protect', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupFrabicProtect)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFrabicProtect, {
            title: 'NewSetupFrabicProtectInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupFrabicProtect: Omit<SetupFrabicProtect, 'id'>,
  ): Promise<SetupFrabicProtect> {
    return this.orderProductRepository.setupFrabicProtect(id).create(setupFrabicProtect);
  }

  @patch('/order-products/{id}/setup-frabic-protect', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupFrabicProtect PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFrabicProtect, {partial: true}),
        },
      },
    })
    setupFrabicProtect: Partial<SetupFrabicProtect>,
    @param.query.object('where', getWhereSchemaFor(SetupFrabicProtect)) where?: Where<SetupFrabicProtect>,
  ): Promise<Count> {
    return this.orderProductRepository.setupFrabicProtect(id).patch(setupFrabicProtect, where);
  }

  @del('/order-products/{id}/setup-frabic-protect', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupFrabicProtect DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupFrabicProtect)) where?: Where<SetupFrabicProtect>,
  ): Promise<Count> {
    return this.orderProductRepository.setupFrabicProtect(id).delete(where);
  }
}
