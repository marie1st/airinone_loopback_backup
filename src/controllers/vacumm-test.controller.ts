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
import {VacummTest} from '../models';
import {VacummTestRepository} from '../repositories';

export class VacummTestController {
  constructor(
    @repository(VacummTestRepository)
    public vacummTestRepository : VacummTestRepository,
  ) {}

  @post('/vacumm-tests', {
    responses: {
      '200': {
        description: 'VacummTest model instance',
        content: {'application/json': {schema: getModelSchemaRef(VacummTest)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VacummTest, {
            title: 'NewVacummTest',
            
          }),
        },
      },
    })
    vacummTest: VacummTest,
  ): Promise<VacummTest> {
    return this.vacummTestRepository.create(vacummTest);
  }

  @get('/vacumm-tests/count', {
    responses: {
      '200': {
        description: 'VacummTest model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VacummTest) where?: Where<VacummTest>,
  ): Promise<Count> {
    return this.vacummTestRepository.count(where);
  }

  @get('/vacumm-tests', {
    responses: {
      '200': {
        description: 'Array of VacummTest model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VacummTest, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VacummTest) filter?: Filter<VacummTest>,
  ): Promise<VacummTest[]> {
    return this.vacummTestRepository.find(filter);
  }

  @patch('/vacumm-tests', {
    responses: {
      '200': {
        description: 'VacummTest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VacummTest, {partial: true}),
        },
      },
    })
    vacummTest: VacummTest,
    @param.where(VacummTest) where?: Where<VacummTest>,
  ): Promise<Count> {
    return this.vacummTestRepository.updateAll(vacummTest, where);
  }

  @get('/vacumm-tests/{id}', {
    responses: {
      '200': {
        description: 'VacummTest model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VacummTest, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VacummTest, {exclude: 'where'}) filter?: FilterExcludingWhere<VacummTest>
  ): Promise<VacummTest> {
    return this.vacummTestRepository.findById(id, filter);
  }

  @patch('/vacumm-tests/{id}', {
    responses: {
      '204': {
        description: 'VacummTest PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VacummTest, {partial: true}),
        },
      },
    })
    vacummTest: VacummTest,
  ): Promise<void> {
    await this.vacummTestRepository.updateById(id, vacummTest);
  }

  @put('/vacumm-tests/{id}', {
    responses: {
      '204': {
        description: 'VacummTest PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vacummTest: VacummTest,
  ): Promise<void> {
    await this.vacummTestRepository.replaceById(id, vacummTest);
  }

  @del('/vacumm-tests/{id}', {
    responses: {
      '204': {
        description: 'VacummTest DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vacummTestRepository.deleteById(id);
  }
}
