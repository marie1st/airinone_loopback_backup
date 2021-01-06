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
import {LeakTest} from '../models';
import {LeakTestRepository} from '../repositories';

export class LeakTestController {
  constructor(
    @repository(LeakTestRepository)
    public leakTestRepository : LeakTestRepository,
  ) {}

  @post('/leak-tests', {
    responses: {
      '200': {
        description: 'LeakTest model instance',
        content: {'application/json': {schema: getModelSchemaRef(LeakTest)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeakTest, {
            title: 'NewLeakTest',
            
          }),
        },
      },
    })
    leakTest: LeakTest,
  ): Promise<LeakTest> {
    return this.leakTestRepository.create(leakTest);
  }

  @get('/leak-tests/count', {
    responses: {
      '200': {
        description: 'LeakTest model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LeakTest) where?: Where<LeakTest>,
  ): Promise<Count> {
    return this.leakTestRepository.count(where);
  }

  @get('/leak-tests', {
    responses: {
      '200': {
        description: 'Array of LeakTest model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LeakTest, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LeakTest) filter?: Filter<LeakTest>,
  ): Promise<LeakTest[]> {
    return this.leakTestRepository.find(filter);
  }

  @patch('/leak-tests', {
    responses: {
      '200': {
        description: 'LeakTest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeakTest, {partial: true}),
        },
      },
    })
    leakTest: LeakTest,
    @param.where(LeakTest) where?: Where<LeakTest>,
  ): Promise<Count> {
    return this.leakTestRepository.updateAll(leakTest, where);
  }

  @get('/leak-tests/{id}', {
    responses: {
      '200': {
        description: 'LeakTest model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LeakTest, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LeakTest, {exclude: 'where'}) filter?: FilterExcludingWhere<LeakTest>
  ): Promise<LeakTest> {
    return this.leakTestRepository.findById(id, filter);
  }

  @patch('/leak-tests/{id}', {
    responses: {
      '204': {
        description: 'LeakTest PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LeakTest, {partial: true}),
        },
      },
    })
    leakTest: LeakTest,
  ): Promise<void> {
    await this.leakTestRepository.updateById(id, leakTest);
  }

  @put('/leak-tests/{id}', {
    responses: {
      '204': {
        description: 'LeakTest PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() leakTest: LeakTest,
  ): Promise<void> {
    await this.leakTestRepository.replaceById(id, leakTest);
  }

  @del('/leak-tests/{id}', {
    responses: {
      '204': {
        description: 'LeakTest DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.leakTestRepository.deleteById(id);
  }
}
