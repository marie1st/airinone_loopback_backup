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
import {SetupCost} from '../models';
import {SetupCostRepository} from '../repositories';

export class SetupCostController {
  constructor(
    @repository(SetupCostRepository)
    public setupCostRepository : SetupCostRepository,
  ) {}

  @post('/setup-costs', {
    responses: {
      '200': {
        description: 'SetupCost model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupCost)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCost, {
            title: 'NewSetupCost',
            
          }),
        },
      },
    })
    setupCost: SetupCost,
  ): Promise<SetupCost> {
    return this.setupCostRepository.create(setupCost);
  }

  @get('/setup-costs/count', {
    responses: {
      '200': {
        description: 'SetupCost model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupCost) where?: Where<SetupCost>,
  ): Promise<Count> {
    return this.setupCostRepository.count(where);
  }

  @get('/setup-costs', {
    responses: {
      '200': {
        description: 'Array of SetupCost model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupCost, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupCost) filter?: Filter<SetupCost>,
  ): Promise<SetupCost[]> {
    return this.setupCostRepository.find(filter);
  }

  @patch('/setup-costs', {
    responses: {
      '200': {
        description: 'SetupCost PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCost, {partial: true}),
        },
      },
    })
    setupCost: SetupCost,
    @param.where(SetupCost) where?: Where<SetupCost>,
  ): Promise<Count> {
    return this.setupCostRepository.updateAll(setupCost, where);
  }

  @get('/setup-costs/{id}', {
    responses: {
      '200': {
        description: 'SetupCost model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupCost, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupCost, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupCost>
  ): Promise<SetupCost> {
    return this.setupCostRepository.findById(id, filter);
  }

  @patch('/setup-costs/{id}', {
    responses: {
      '204': {
        description: 'SetupCost PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCost, {partial: true}),
        },
      },
    })
    setupCost: SetupCost,
  ): Promise<void> {
    await this.setupCostRepository.updateById(id, setupCost);
  }

  @put('/setup-costs/{id}', {
    responses: {
      '204': {
        description: 'SetupCost PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupCost: SetupCost,
  ): Promise<void> {
    await this.setupCostRepository.replaceById(id, setupCost);
  }

  @del('/setup-costs/{id}', {
    responses: {
      '204': {
        description: 'SetupCost DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupCostRepository.deleteById(id);
  }
}
