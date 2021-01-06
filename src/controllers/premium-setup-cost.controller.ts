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
import {PremiumSetupCost} from '../models';
import {PremiumSetupCostRepository} from '../repositories';

export class PremiumSetupCostController {
  constructor(
    @repository(PremiumSetupCostRepository)
    public premiumSetupCostRepository : PremiumSetupCostRepository,
  ) {}

  @post('/premium-setup-costs', {
    responses: {
      '200': {
        description: 'PremiumSetupCost model instance',
        content: {'application/json': {schema: getModelSchemaRef(PremiumSetupCost)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PremiumSetupCost, {
            title: 'NewPremiumSetupCost',
            
          }),
        },
      },
    })
    premiumSetupCost: PremiumSetupCost,
  ): Promise<PremiumSetupCost> {
    return this.premiumSetupCostRepository.create(premiumSetupCost);
  }

  @get('/premium-setup-costs/count', {
    responses: {
      '200': {
        description: 'PremiumSetupCost model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PremiumSetupCost) where?: Where<PremiumSetupCost>,
  ): Promise<Count> {
    return this.premiumSetupCostRepository.count(where);
  }

  @get('/premium-setup-costs', {
    responses: {
      '200': {
        description: 'Array of PremiumSetupCost model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PremiumSetupCost, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PremiumSetupCost) filter?: Filter<PremiumSetupCost>,
  ): Promise<PremiumSetupCost[]> {
    return this.premiumSetupCostRepository.find(filter);
  }

  @patch('/premium-setup-costs', {
    responses: {
      '200': {
        description: 'PremiumSetupCost PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PremiumSetupCost, {partial: true}),
        },
      },
    })
    premiumSetupCost: PremiumSetupCost,
    @param.where(PremiumSetupCost) where?: Where<PremiumSetupCost>,
  ): Promise<Count> {
    return this.premiumSetupCostRepository.updateAll(premiumSetupCost, where);
  }

  @get('/premium-setup-costs/{id}', {
    responses: {
      '200': {
        description: 'PremiumSetupCost model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PremiumSetupCost, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PremiumSetupCost, {exclude: 'where'}) filter?: FilterExcludingWhere<PremiumSetupCost>
  ): Promise<PremiumSetupCost> {
    return this.premiumSetupCostRepository.findById(id, filter);
  }

  @patch('/premium-setup-costs/{id}', {
    responses: {
      '204': {
        description: 'PremiumSetupCost PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PremiumSetupCost, {partial: true}),
        },
      },
    })
    premiumSetupCost: PremiumSetupCost,
  ): Promise<void> {
    await this.premiumSetupCostRepository.updateById(id, premiumSetupCost);
  }

  @put('/premium-setup-costs/{id}', {
    responses: {
      '204': {
        description: 'PremiumSetupCost PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() premiumSetupCost: PremiumSetupCost,
  ): Promise<void> {
    await this.premiumSetupCostRepository.replaceById(id, premiumSetupCost);
  }

  @del('/premium-setup-costs/{id}', {
    responses: {
      '204': {
        description: 'PremiumSetupCost DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.premiumSetupCostRepository.deleteById(id);
  }
}
