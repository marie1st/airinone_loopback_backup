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
  VacummTest,
} from '../models';
import {OrderProductRepository} from '../repositories';

export class OrderProductVacummTestController {
  constructor(
    @repository(OrderProductRepository) protected orderProductRepository: OrderProductRepository,
  ) { }

  @get('/order-products/{id}/vacumm-test', {
    responses: {
      '200': {
        description: 'OrderProduct has one VacummTest',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VacummTest),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<VacummTest>,
  ): Promise<VacummTest> {
    return this.orderProductRepository.vacummTest(id).get(filter);
  }

  @post('/order-products/{id}/vacumm-test', {
    responses: {
      '200': {
        description: 'OrderProduct model instance',
        content: {'application/json': {schema: getModelSchemaRef(VacummTest)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof OrderProduct.prototype.order_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VacummTest, {
            title: 'NewVacummTestInOrderProduct',
            exclude: ['id'],
            optional: ['order_id']
          }),
        },
      },
    }) vacummTest: Omit<VacummTest, 'id'>,
  ): Promise<VacummTest> {
    return this.orderProductRepository.vacummTest(id).create(vacummTest);
  }

  @patch('/order-products/{id}/vacumm-test', {
    responses: {
      '200': {
        description: 'OrderProduct.VacummTest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VacummTest, {partial: true}),
        },
      },
    })
    vacummTest: Partial<VacummTest>,
    @param.query.object('where', getWhereSchemaFor(VacummTest)) where?: Where<VacummTest>,
  ): Promise<Count> {
    return this.orderProductRepository.vacummTest(id).patch(vacummTest, where);
  }

  @del('/order-products/{id}/vacumm-test', {
    responses: {
      '200': {
        description: 'OrderProduct.VacummTest DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(VacummTest)) where?: Where<VacummTest>,
  ): Promise<Count> {
    return this.orderProductRepository.vacummTest(id).delete(where);
  }
}
