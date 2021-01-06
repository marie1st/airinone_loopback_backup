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
import {AddLiquid} from '../models';
import {AddLiquidRepository} from '../repositories';

export class AddLiquidController {
  constructor(
    @repository(AddLiquidRepository)
    public addLiquidRepository : AddLiquidRepository,
  ) {}

  @post('/add-liquids', {
    responses: {
      '200': {
        description: 'AddLiquid model instance',
        content: {'application/json': {schema: getModelSchemaRef(AddLiquid)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AddLiquid, {
            title: 'NewAddLiquid',
            
          }),
        },
      },
    })
    addLiquid: AddLiquid,
  ): Promise<AddLiquid> {
    return this.addLiquidRepository.create(addLiquid);
  }

  @get('/add-liquids/count', {
    responses: {
      '200': {
        description: 'AddLiquid model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AddLiquid) where?: Where<AddLiquid>,
  ): Promise<Count> {
    return this.addLiquidRepository.count(where);
  }

  @get('/add-liquids', {
    responses: {
      '200': {
        description: 'Array of AddLiquid model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AddLiquid, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AddLiquid) filter?: Filter<AddLiquid>,
  ): Promise<AddLiquid[]> {
    return this.addLiquidRepository.find(filter);
  }

  @patch('/add-liquids', {
    responses: {
      '200': {
        description: 'AddLiquid PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AddLiquid, {partial: true}),
        },
      },
    })
    addLiquid: AddLiquid,
    @param.where(AddLiquid) where?: Where<AddLiquid>,
  ): Promise<Count> {
    return this.addLiquidRepository.updateAll(addLiquid, where);
  }

  @get('/add-liquids/{id}', {
    responses: {
      '200': {
        description: 'AddLiquid model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AddLiquid, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AddLiquid, {exclude: 'where'}) filter?: FilterExcludingWhere<AddLiquid>
  ): Promise<AddLiquid> {
    return this.addLiquidRepository.findById(id, filter);
  }

  @patch('/add-liquids/{id}', {
    responses: {
      '204': {
        description: 'AddLiquid PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AddLiquid, {partial: true}),
        },
      },
    })
    addLiquid: AddLiquid,
  ): Promise<void> {
    await this.addLiquidRepository.updateById(id, addLiquid);
  }

  @put('/add-liquids/{id}', {
    responses: {
      '204': {
        description: 'AddLiquid PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() addLiquid: AddLiquid,
  ): Promise<void> {
    await this.addLiquidRepository.replaceById(id, addLiquid);
  }

  @del('/add-liquids/{id}', {
    responses: {
      '204': {
        description: 'AddLiquid DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.addLiquidRepository.deleteById(id);
  }
}
