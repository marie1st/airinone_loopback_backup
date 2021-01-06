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
  SetupProcessPic,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductSetupProcessPicController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/setup-process-pic', {
    responses: {
      '200': {
        description: 'OrderProduct has one SetupProcessPic',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupProcessPic),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SetupProcessPic>,
  ): Promise<SetupProcessPic> {
    return this.orderProductRepository.setupProcessPic(id).get(filter);
  }

  @post('/order-products/{id}/setup-process-pic', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupProcessPic)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {
            title: 'NewSetupProcessPicInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) setupProcessPic: Omit<SetupProcessPic, 'id'>,
  ): Promise<SetupProcessPic> {
    return this.orderProductRepository.setupProcessPic(id).create(setupProcessPic);
  }

  @patch('/order-products/{id}/setup-process-pic', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupProcessPic PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {partial: true}),
        },
      },
    })
    setupProcessPic: Partial<SetupProcessPic>,
    @param.query.object('where', getWhereSchemaFor(SetupProcessPic)) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.orderProductRepository.setupProcessPic(id).patch(setupProcessPic, where);
  }

  @del('/order-products/{id}/setup-process-pic', {
    responses: {
      '200': {
        description: 'OrderProduct.SetupProcessPic DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SetupProcessPic)) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.orderProductRepository.setupProcessPic(id).delete(where);
  }
}
