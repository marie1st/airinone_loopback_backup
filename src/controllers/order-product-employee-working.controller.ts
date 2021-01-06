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
  EmployeeWorking,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductEmployeeWorkingController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/employee-working', {
    responses: {
      '200': {
        description: 'OrderProduct has one EmployeeWorking',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EmployeeWorking),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EmployeeWorking>,
  ): Promise<EmployeeWorking> {
    return this.orderProductRepository.employeeWorking(id).get(filter);
  }

  @post('/order-products/{id}/employee-working', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(EmployeeWorking)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {
            title: 'NewEmployeeWorkingInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) employeeWorking: Omit<EmployeeWorking, 'id'>,
  ): Promise<EmployeeWorking> {
    return this.orderProductRepository.employeeWorking(id).create(employeeWorking);
  }

  @patch('/order-products/{id}/employee-working', {
    responses: {
      '200': {
        description: 'OrderProduct.EmployeeWorking PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {partial: true}),
        },
      },
    })
    employeeWorking: Partial<EmployeeWorking>,
    @param.query.object('where', getWhereSchemaFor(EmployeeWorking)) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.orderProductRepository.employeeWorking(id).patch(employeeWorking, where);
  }

  @del('/order-products/{id}/employee-working', {
    responses: {
      '200': {
        description: 'OrderProduct.EmployeeWorking DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EmployeeWorking)) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.orderProductRepository.employeeWorking(id).delete(where);
  }
}
