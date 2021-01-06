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
import {SetupState3} from '../models';
import {SetupState3Repository} from '../repositories';

export class SetupState3Controller {
  constructor(
    @repository(SetupState3Repository)
    public setupState3Repository : SetupState3Repository,
  ) {}

  @post('/setup-state3s', {
    responses: {
      '200': {
        description: 'SetupState3 model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupState3)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupState3, {
            title: 'NewSetupState3',
            
          }),
        },
      },
    })
    setupState3: SetupState3,
  ): Promise<SetupState3> {
    return this.setupState3Repository.create(setupState3);
  }

  @get('/setup-state3s/count', {
    responses: {
      '200': {
        description: 'SetupState3 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupState3) where?: Where<SetupState3>,
  ): Promise<Count> {
    return this.setupState3Repository.count(where);
  }

  @get('/setup-state3s', {
    responses: {
      '200': {
        description: 'Array of SetupState3 model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupState3, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupState3) filter?: Filter<SetupState3>,
  ): Promise<SetupState3[]> {
    return this.setupState3Repository.find(filter);
  }

  @patch('/setup-state3s', {
    responses: {
      '200': {
        description: 'SetupState3 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupState3, {partial: true}),
        },
      },
    })
    setupState3: SetupState3,
    @param.where(SetupState3) where?: Where<SetupState3>,
  ): Promise<Count> {
    return this.setupState3Repository.updateAll(setupState3, where);
  }

  @get('/setup-state3s/{id}', {
    responses: {
      '200': {
        description: 'SetupState3 model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupState3, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupState3, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupState3>
  ): Promise<SetupState3> {
    return this.setupState3Repository.findById(id, filter);
  }

  @patch('/setup-state3s/{id}', {
    responses: {
      '204': {
        description: 'SetupState3 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupState3, {partial: true}),
        },
      },
    })
    setupState3: SetupState3,
  ): Promise<void> {
    await this.setupState3Repository.updateById(id, setupState3);
  }

  @put('/setup-state3s/{id}', {
    responses: {
      '204': {
        description: 'SetupState3 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupState3: SetupState3,
  ): Promise<void> {
    await this.setupState3Repository.replaceById(id, setupState3);
  }

  @del('/setup-state3s/{id}', {
    responses: {
      '204': {
        description: 'SetupState3 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupState3Repository.deleteById(id);
  }
}
