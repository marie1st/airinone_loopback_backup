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
import {SetupFcu} from '../models';
import {SetupFcuRepository} from '../repositories';

export class SetupFcuController {
  constructor(
    @repository(SetupFcuRepository)
    public setupFcuRepository : SetupFcuRepository,
  ) {}

  @post('/setup-fcus', {
    responses: {
      '200': {
        description: 'SetupFcu model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupFcu)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFcu, {
            title: 'NewSetupFcu',
            
          }),
        },
      },
    })
    setupFcu: SetupFcu,
  ): Promise<SetupFcu> {
    return this.setupFcuRepository.create(setupFcu);
  }

  @get('/setup-fcus/count', {
    responses: {
      '200': {
        description: 'SetupFcu model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupFcu) where?: Where<SetupFcu>,
  ): Promise<Count> {
    return this.setupFcuRepository.count(where);
  }

  @get('/setup-fcus', {
    responses: {
      '200': {
        description: 'Array of SetupFcu model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupFcu, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupFcu) filter?: Filter<SetupFcu>,
  ): Promise<SetupFcu[]> {
    return this.setupFcuRepository.find(filter);
  }

  @patch('/setup-fcus', {
    responses: {
      '200': {
        description: 'SetupFcu PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFcu, {partial: true}),
        },
      },
    })
    setupFcu: SetupFcu,
    @param.where(SetupFcu) where?: Where<SetupFcu>,
  ): Promise<Count> {
    return this.setupFcuRepository.updateAll(setupFcu, where);
  }

  @get('/setup-fcus/{id}', {
    responses: {
      '200': {
        description: 'SetupFcu model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupFcu, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupFcu, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupFcu>
  ): Promise<SetupFcu> {
    return this.setupFcuRepository.findById(id, filter);
  }

  @patch('/setup-fcus/{id}', {
    responses: {
      '204': {
        description: 'SetupFcu PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFcu, {partial: true}),
        },
      },
    })
    setupFcu: SetupFcu,
  ): Promise<void> {
    await this.setupFcuRepository.updateById(id, setupFcu);
  }

  @put('/setup-fcus/{id}', {
    responses: {
      '204': {
        description: 'SetupFcu PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupFcu: SetupFcu,
  ): Promise<void> {
    await this.setupFcuRepository.replaceById(id, setupFcu);
  }

  @del('/setup-fcus/{id}', {
    responses: {
      '204': {
        description: 'SetupFcu DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupFcuRepository.deleteById(id);
  }
}
