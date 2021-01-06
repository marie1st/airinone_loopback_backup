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
import {SetupPipe} from '../models';
import {SetupPipeRepository} from '../repositories';

export class SetupPipeController {
  constructor(
    @repository(SetupPipeRepository)
    public setupPipeRepository : SetupPipeRepository,
  ) {}

  @post('/setup-pipes', {
    responses: {
      '200': {
        description: 'SetupPipe model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupPipe)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupPipe, {
            title: 'NewSetupPipe',
            
          }),
        },
      },
    })
    setupPipe: SetupPipe,
  ): Promise<SetupPipe> {
    return this.setupPipeRepository.create(setupPipe);
  }

  @get('/setup-pipes/count', {
    responses: {
      '200': {
        description: 'SetupPipe model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupPipe) where?: Where<SetupPipe>,
  ): Promise<Count> {
    return this.setupPipeRepository.count(where);
  }

  @get('/setup-pipes', {
    responses: {
      '200': {
        description: 'Array of SetupPipe model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupPipe, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupPipe) filter?: Filter<SetupPipe>,
  ): Promise<SetupPipe[]> {
    return this.setupPipeRepository.find(filter);
  }

  @patch('/setup-pipes', {
    responses: {
      '200': {
        description: 'SetupPipe PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupPipe, {partial: true}),
        },
      },
    })
    setupPipe: SetupPipe,
    @param.where(SetupPipe) where?: Where<SetupPipe>,
  ): Promise<Count> {
    return this.setupPipeRepository.updateAll(setupPipe, where);
  }

  @get('/setup-pipes/{id}', {
    responses: {
      '200': {
        description: 'SetupPipe model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupPipe, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupPipe, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupPipe>
  ): Promise<SetupPipe> {
    return this.setupPipeRepository.findById(id, filter);
  }

  @patch('/setup-pipes/{id}', {
    responses: {
      '204': {
        description: 'SetupPipe PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupPipe, {partial: true}),
        },
      },
    })
    setupPipe: SetupPipe,
  ): Promise<void> {
    await this.setupPipeRepository.updateById(id, setupPipe);
  }

  @put('/setup-pipes/{id}', {
    responses: {
      '204': {
        description: 'SetupPipe PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupPipe: SetupPipe,
  ): Promise<void> {
    await this.setupPipeRepository.replaceById(id, setupPipe);
  }

  @del('/setup-pipes/{id}', {
    responses: {
      '204': {
        description: 'SetupPipe DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupPipeRepository.deleteById(id);
  }
}
