import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {WithdrawMoney} from '../models';
import {WithdrawMoneyRepository} from '../repositories';

export class WithdrawMoneyController {
  constructor(
    @repository(WithdrawMoneyRepository)
    public withdrawMoneyRepository : WithdrawMoneyRepository,
  ) {}

  @post('/withdraw-monies', {
    responses: {
      '200': {
        description: 'WithdrawMoney model instance',
        content: {'application/json': {schema: getModelSchemaRef(WithdrawMoney)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMoney, {
            title: 'NewWithdrawMoney',
            
          }),
        },
      },
    })
    withdrawMoney: WithdrawMoney,
  ): Promise<WithdrawMoney> {
    return this.withdrawMoneyRepository.create(withdrawMoney);
  }

  @get('/withdraw-monies/count', {
    responses: {
      '200': {
        description: 'WithdrawMoney model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(WithdrawMoney) where?: Where<WithdrawMoney>,
  ): Promise<Count> {
    return this.withdrawMoneyRepository.count(where);
  }

  @get('/withdraw-monies', {
    responses: {
      '200': {
        description: 'Array of WithdrawMoney model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WithdrawMoney, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WithdrawMoney) filter?: Filter<WithdrawMoney>,
  ): Promise<WithdrawMoney[]> {
    return this.withdrawMoneyRepository.find(filter);
  }

  @patch('/withdraw-monies', {
    responses: {
      '200': {
        description: 'WithdrawMoney PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMoney, {partial: true}),
        },
      },
    })
    withdrawMoney: WithdrawMoney,
    @param.where(WithdrawMoney) where?: Where<WithdrawMoney>,
  ): Promise<Count> {
    return this.withdrawMoneyRepository.updateAll(withdrawMoney, where);
  }

  @get('/withdraw-monies/{id}', {
    responses: {
      '200': {
        description: 'WithdrawMoney model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WithdrawMoney, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(WithdrawMoney, {exclude: 'where'}) filter?: FilterExcludingWhere<WithdrawMoney>
  ): Promise<WithdrawMoney> {
    return this.withdrawMoneyRepository.findById(id, filter);
  }

  @patch('/withdraw-monies/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMoney PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WithdrawMoney, {partial: true}),
        },
      },
    })
    withdrawMoney: WithdrawMoney,
  ): Promise<void> {
    await this.withdrawMoneyRepository.updateById(id, withdrawMoney);
  }

  @put('/withdraw-monies/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMoney PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() withdrawMoney: WithdrawMoney,
  ): Promise<void> {
    await this.withdrawMoneyRepository.replaceById(id, withdrawMoney);
  }

  @del('/withdraw-monies/{id}', {
    responses: {
      '204': {
        description: 'WithdrawMoney DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.withdrawMoneyRepository.deleteById(id);
  }
}
