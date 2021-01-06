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
import {Wage} from '../models';
import {WageRepository} from '../repositories';

export class WageController {
  constructor(
    @repository(WageRepository)
    public wageRepository : WageRepository,
  ) {}

  @post('/wages', {
    responses: {
      '200': {
        description: 'Wage model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wage)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wage, {
            title: 'NewWage',
            
          }),
        },
      },
    })
    wage: Wage,
  ): Promise<Wage> {
    return this.wageRepository.create(wage);
  }

  @get('/wages/count', {
    responses: {
      '200': {
        description: 'Wage model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Wage) where?: Where<Wage>,
  ): Promise<Count> {
    return this.wageRepository.count(where);
  }

  @get('/wages', {
    responses: {
      '200': {
        description: 'Array of Wage model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Wage, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Wage) filter?: Filter<Wage>,
  ): Promise<Wage[]> {
    return this.wageRepository.find(filter);
  }

  @patch('/wages', {
    responses: {
      '200': {
        description: 'Wage PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wage, {partial: true}),
        },
      },
    })
    wage: Wage,
    @param.where(Wage) where?: Where<Wage>,
  ): Promise<Count> {
    return this.wageRepository.updateAll(wage, where);
  }

  @get('/wages/{id}', {
    responses: {
      '200': {
        description: 'Wage model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Wage, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Wage, {exclude: 'where'}) filter?: FilterExcludingWhere<Wage>
  ): Promise<Wage> {
    return this.wageRepository.findById(id, filter);
  }

  @patch('/wages/{id}', {
    responses: {
      '204': {
        description: 'Wage PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wage, {partial: true}),
        },
      },
    })
    wage: Wage,
  ): Promise<void> {
    await this.wageRepository.updateById(id, wage);
  }

  @put('/wages/{id}', {
    responses: {
      '204': {
        description: 'Wage PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() wage: Wage,
  ): Promise<void> {
    await this.wageRepository.replaceById(id, wage);
  }

  @del('/wages/{id}', {
    responses: {
      '204': {
        description: 'Wage DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.wageRepository.deleteById(id);
  }
}
