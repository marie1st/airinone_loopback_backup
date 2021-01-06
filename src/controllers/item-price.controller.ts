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
import {ItemPrice} from '../models';
import {ItemPriceRepository} from '../repositories';

export class ItemPriceController {
  constructor(
    @repository(ItemPriceRepository)
    public itemPriceRepository : ItemPriceRepository,
  ) {}

  @post('/item-prices', {
    responses: {
      '200': {
        description: 'ItemPrice model instance',
        content: {'application/json': {schema: getModelSchemaRef(ItemPrice)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPrice, {
            title: 'NewItemPrice',
            
          }),
        },
      },
    })
    itemPrice: ItemPrice,
  ): Promise<ItemPrice> {
    return this.itemPriceRepository.create(itemPrice);
  }

  @get('/item-prices/count', {
    responses: {
      '200': {
        description: 'ItemPrice model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ItemPrice) where?: Where<ItemPrice>,
  ): Promise<Count> {
    return this.itemPriceRepository.count(where);
  }

  @get('/item-prices', {
    responses: {
      '200': {
        description: 'Array of ItemPrice model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ItemPrice, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ItemPrice) filter?: Filter<ItemPrice>,
  ): Promise<ItemPrice[]> {
    return this.itemPriceRepository.find(filter);
  }

  @patch('/item-prices', {
    responses: {
      '200': {
        description: 'ItemPrice PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPrice, {partial: true}),
        },
      },
    })
    itemPrice: ItemPrice,
    @param.where(ItemPrice) where?: Where<ItemPrice>,
  ): Promise<Count> {
    return this.itemPriceRepository.updateAll(itemPrice, where);
  }

  @get('/item-prices/{id}', {
    responses: {
      '200': {
        description: 'ItemPrice model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ItemPrice, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ItemPrice, {exclude: 'where'}) filter?: FilterExcludingWhere<ItemPrice>
  ): Promise<ItemPrice> {
    return this.itemPriceRepository.findById(id, filter);
  }

  @patch('/item-prices/{id}', {
    responses: {
      '204': {
        description: 'ItemPrice PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemPrice, {partial: true}),
        },
      },
    })
    itemPrice: ItemPrice,
  ): Promise<void> {
    await this.itemPriceRepository.updateById(id, itemPrice);
  }

  @put('/item-prices/{id}', {
    responses: {
      '204': {
        description: 'ItemPrice PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() itemPrice: ItemPrice,
  ): Promise<void> {
    await this.itemPriceRepository.replaceById(id, itemPrice);
  }

  @del('/item-prices/{id}', {
    responses: {
      '204': {
        description: 'ItemPrice DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.itemPriceRepository.deleteById(id);
  }
}
