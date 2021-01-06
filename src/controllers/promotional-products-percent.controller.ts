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
import {PromotionalProductsPercent} from '../models';
import {PromotionalProductsPercentRepository} from '../repositories';

export class PromotionalProductsPercentController {
  constructor(
    @repository(PromotionalProductsPercentRepository)
    public promotionalProductsPercentRepository : PromotionalProductsPercentRepository,
  ) {}

  @post('/promotional-products-percents', {
    responses: {
      '200': {
        description: 'PromotionalProductsPercent model instance',
        content: {'application/json': {schema: getModelSchemaRef(PromotionalProductsPercent)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPercent, {
            title: 'NewPromotionalProductsPercent',
            
          }),
        },
      },
    })
    promotionalProductsPercent: PromotionalProductsPercent,
  ): Promise<PromotionalProductsPercent> {
    return this.promotionalProductsPercentRepository.create(promotionalProductsPercent);
  }

  @get('/promotional-products-percents/count', {
    responses: {
      '200': {
        description: 'PromotionalProductsPercent model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PromotionalProductsPercent) where?: Where<PromotionalProductsPercent>,
  ): Promise<Count> {
    return this.promotionalProductsPercentRepository.count(where);
  }

  @get('/promotional-products-percents', {
    responses: {
      '200': {
        description: 'Array of PromotionalProductsPercent model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PromotionalProductsPercent, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PromotionalProductsPercent) filter?: Filter<PromotionalProductsPercent>,
  ): Promise<PromotionalProductsPercent[]> {
    return this.promotionalProductsPercentRepository.find(filter);
  }

  @patch('/promotional-products-percents', {
    responses: {
      '200': {
        description: 'PromotionalProductsPercent PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPercent, {partial: true}),
        },
      },
    })
    promotionalProductsPercent: PromotionalProductsPercent,
    @param.where(PromotionalProductsPercent) where?: Where<PromotionalProductsPercent>,
  ): Promise<Count> {
    return this.promotionalProductsPercentRepository.updateAll(promotionalProductsPercent, where);
  }

  @get('/promotional-products-percents/{id}', {
    responses: {
      '200': {
        description: 'PromotionalProductsPercent model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PromotionalProductsPercent, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PromotionalProductsPercent, {exclude: 'where'}) filter?: FilterExcludingWhere<PromotionalProductsPercent>
  ): Promise<PromotionalProductsPercent> {
    return this.promotionalProductsPercentRepository.findById(id, filter);
  }

  @patch('/promotional-products-percents/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPercent PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PromotionalProductsPercent, {partial: true}),
        },
      },
    })
    promotionalProductsPercent: PromotionalProductsPercent,
  ): Promise<void> {
    await this.promotionalProductsPercentRepository.updateById(id, promotionalProductsPercent);
  }

  @put('/promotional-products-percents/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPercent PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() promotionalProductsPercent: PromotionalProductsPercent,
  ): Promise<void> {
    await this.promotionalProductsPercentRepository.replaceById(id, promotionalProductsPercent);
  }

  @del('/promotional-products-percents/{id}', {
    responses: {
      '204': {
        description: 'PromotionalProductsPercent DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.promotionalProductsPercentRepository.deleteById(id);
  }
}
