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
import {State4Info} from '../models';
import {State4InfoRepository} from '../repositories';

export class State4InfoController {
  constructor(
    @repository(State4InfoRepository)
    public state4InfoRepository : State4InfoRepository,
  ) {}

  @post('/state4infos', {
    responses: {
      '200': {
        description: 'State4Info model instance',
        content: {'application/json': {schema: getModelSchemaRef(State4Info)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(State4Info, {
            title: 'NewState4Info',
            
          }),
        },
      },
    })
    state4Info: State4Info,
  ): Promise<State4Info> {
    return this.state4InfoRepository.create(state4Info);
  }

  @get('/state4infos/count', {
    responses: {
      '200': {
        description: 'State4Info model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(State4Info) where?: Where<State4Info>,
  ): Promise<Count> {
    return this.state4InfoRepository.count(where);
  }

  @get('/state4infos', {
    responses: {
      '200': {
        description: 'Array of State4Info model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(State4Info, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(State4Info) filter?: Filter<State4Info>,
  ): Promise<State4Info[]> {
    return this.state4InfoRepository.find(filter);
  }

  @patch('/state4infos', {
    responses: {
      '200': {
        description: 'State4Info PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(State4Info, {partial: true}),
        },
      },
    })
    state4Info: State4Info,
    @param.where(State4Info) where?: Where<State4Info>,
  ): Promise<Count> {
    return this.state4InfoRepository.updateAll(state4Info, where);
  }

  @get('/state4infos/{id}', {
    responses: {
      '200': {
        description: 'State4Info model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(State4Info, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(State4Info, {exclude: 'where'}) filter?: FilterExcludingWhere<State4Info>
  ): Promise<State4Info> {
    return this.state4InfoRepository.findById(id, filter);
  }

  @patch('/state4infos/{id}', {
    responses: {
      '204': {
        description: 'State4Info PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(State4Info, {partial: true}),
        },
      },
    })
    state4Info: State4Info,
  ): Promise<void> {
    await this.state4InfoRepository.updateById(id, state4Info);
  }

  @put('/state4infos/{id}', {
    responses: {
      '204': {
        description: 'State4Info PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() state4Info: State4Info,
  ): Promise<void> {
    await this.state4InfoRepository.replaceById(id, state4Info);
  }

  @del('/state4infos/{id}', {
    responses: {
      '204': {
        description: 'State4Info DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.state4InfoRepository.deleteById(id);
  }
}
