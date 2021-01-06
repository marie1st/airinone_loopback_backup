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
  PipeSysNElec,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductPipeSysNElecController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/pipe-sys-n-elec', {
    responses: {
      '200': {
        description: 'OrderProduct has one PipeSysNElec',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PipeSysNElec),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PipeSysNElec>,
  ): Promise<PipeSysNElec> {
    return this.orderProductRepository.pipeSysNElec(id).get(filter);
  }

  @post('/order-products/{id}/pipe-sys-n-elec', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(PipeSysNElec)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PipeSysNElec, {
            title: 'NewPipeSysNElecInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) pipeSysNElec: Omit<PipeSysNElec, 'id'>,
  ): Promise<PipeSysNElec> {
    return this.orderProductRepository.pipeSysNElec(id).create(pipeSysNElec);
  }

  @patch('/order-products/{id}/pipe-sys-n-elec', {
    responses: {
      '200': {
        description: 'OrderProduct.PipeSysNElec PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PipeSysNElec, {partial: true}),
        },
      },
    })
    pipeSysNElec: Partial<PipeSysNElec>,
    @param.query.object('where', getWhereSchemaFor(PipeSysNElec)) where?: Where<PipeSysNElec>,
  ): Promise<Count> {
    return this.orderProductRepository.pipeSysNElec(id).patch(pipeSysNElec, where);
  }

  @del('/order-products/{id}/pipe-sys-n-elec', {
    responses: {
      '200': {
        description: 'OrderProduct.PipeSysNElec DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PipeSysNElec)) where?: Where<PipeSysNElec>,
  ): Promise<Count> {
    return this.orderProductRepository.pipeSysNElec(id).delete(where);
  }
}
