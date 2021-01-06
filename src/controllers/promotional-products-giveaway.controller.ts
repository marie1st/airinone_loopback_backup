import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {PromotionalProductsGiveaway} from '../models';
import {PromotionalProductsGiveawayRepository} from '../repositories';

export class PromotionalProductsGiveawayController {
  constructor(
    @repository(PromotionalProductsGiveawayRepository)
    public promotionalProductsGiveawayRepository : PromotionalProductsGiveawayRepository,
  ) {}

  @post('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model instance',
        content: {'application/json': {schema: getModelSchemaRef(PromotionalProductsGiveaway)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {
            title: 'NewPromotionalProductsGiveaway',

          }),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<PromotionalProductsGiveaway> {
    return this.promotionalProductsGiveawayRepository.create(promotionalProductsGiveaway);
  }

  @get('/promotional-products-giveaways/count', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PromotionalProductsGiveaway) where?: Where<PromotionalProductsGiveaway>,
  ): Promise<Count> {
    return this.promotionalProductsGiveawayRepository.count(where);
  }

  @get('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'Array of PromotionalProductsGiveaway model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PromotionalProductsGiveaway, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PromotionalProductsGiveaway) filter?: Filter<PromotionalProductsGiveaway>,
  ): Promise<PromotionalProductsGiveaway[]> {
    return this.promotionalProductsGiveawayRepository.find(filter);
  }

  @patch('/promotional-products-giveaways', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {partial: true}),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
    @param.where(PromotionalProductsGiveaway) where?: Where<PromotionalProductsGiveaway>,
  ): Promise<Count> {
    return this.promotionalProductsGiveawayRepository.updateAll(promotionalProductsGiveaway, where);
  }

  @get('/promotional-products-giveaways/{id}', {
    responses: {
      '200': {
        description: 'PromotionalProductsGiveaway model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PromotionalProductsGiveaway, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: number,
    @param.filter(PromotionalProductsGiveaway, {exclude: 'where'}) filter?: FilterExcludingWhere<PromotionalProductsGiveaway>
  ): Promise<PromotionalProductsGiveaway> {
    return this.promotionalProductsGiveawayRepository.findById(id, filter);
  }

  @patch('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsGiveaway, {partial: true}),
        },
      },
    })
    promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<void> {
    await this.promotionalProductsGiveawayRepository.updateById(id, promotionalProductsGiveaway);
  }

  @put('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: number,
    @requestBody() promotionalProductsGiveaway: PromotionalProductsGiveaway,
  ): Promise<void> {
    await this.promotionalProductsGiveawayRepository.replaceById(id, promotionalProductsGiveaway);
  }

  @del('/promotional-products-giveaways/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsGiveaway DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: number): Promise<void> {
    await this.promotionalProductsGiveawayRepository.deleteById(id);
  }
}
