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
  Customer,
  OrderProduct,
} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerOrderProductController {
  constructor(
    @repository(CustomerRepository) protected customerRepository: CustomerRepository,
  ) { }

  @get('/customers/{id}/order-products', {
    responses: {
      '200': {
        description: 'Array of Customer has many OrderProduct',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(OrderProduct)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<OrderProduct>,
  ): Promise<OrderProduct[]> {
    return this.customerRepository.orderProducts(id).find(filter);
  }

  @post('/customers/{id}/order-products', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderProduct)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Customer.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProduct, {
            title: 'NewOrderProductInCustomer',
            exclude: ['order_id'],
            optional: ['order_by']
          }),
        },
      },
    }) orderProduct: Omit<OrderProduct, 'order_id'>,
  ): Promise<OrderProduct> {
    return this.customerRepository.orderProducts(id).create(orderProduct);
  }

  @patch('/customers/{id}/order-products', {
    responses: {
      '200': {
        description: 'Customer.OrderProduct PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProduct, {partial: true}),
        },
      },
    })
    orderProduct: Partial<OrderProduct>,
    @param.query.object('where', getWhereSchemaFor(OrderProduct)) where?: Where<OrderProduct>,
  ): Promise<Count> {
    return this.customerRepository.orderProducts(id).patch(orderProduct, where);
  }

  @del('/customers/{id}/order-products', {
    responses: {
      '200': {
        description: 'Customer.OrderProduct DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(OrderProduct)) where?: Where<OrderProduct>,
  ): Promise<Count> {
    return this.customerRepository.orderProducts(id).delete(where);
  }
}
