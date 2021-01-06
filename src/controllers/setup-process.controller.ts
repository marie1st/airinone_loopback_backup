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
import {SetupProcess} from '../models';
import {SetupProcessRepository} from '../repositories';

export class SetupProcessController {
  constructor(
    @repository(SetupProcessRepository)
    public setupProcessRepository : SetupProcessRepository,
  ) {}

  @post('/setup-processes', {
    responses: {
      '200': {
        description: 'SetupProcess model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupProcess)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcess, {
            title: 'NewSetupProcess',
            
          }),
        },
      },
    })
    setupProcess: SetupProcess,
  ): Promise<SetupProcess> {
    return this.setupProcessRepository.create(setupProcess);
  }

  @get('/setup-processes/count', {
    responses: {
      '200': {
        description: 'SetupProcess model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupProcess) where?: Where<SetupProcess>,
  ): Promise<Count> {
    return this.setupProcessRepository.count(where);
  }

  @get('/setup-processes', {
    responses: {
      '200': {
        description: 'Array of SetupProcess model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupProcess, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupProcess) filter?: Filter<SetupProcess>,
  ): Promise<SetupProcess[]> {
    return this.setupProcessRepository.find(filter);
  }

  @patch('/setup-processes', {
    responses: {
      '200': {
        description: 'SetupProcess PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcess, {partial: true}),
        },
      },
    })
    setupProcess: SetupProcess,
    @param.where(SetupProcess) where?: Where<SetupProcess>,
  ): Promise<Count> {
    return this.setupProcessRepository.updateAll(setupProcess, where);
  }

  @get('/setup-processes/{id}', {
    responses: {
      '200': {
        description: 'SetupProcess model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupProcess, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupProcess, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupProcess>
  ): Promise<SetupProcess> {
    return this.setupProcessRepository.findById(id, filter);
  }

  @patch('/setup-processes/{id}', {
    responses: {
      '204': {
        description: 'SetupProcess PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcess, {partial: true}),
        },
      },
    })
    setupProcess: SetupProcess,
  ): Promise<void> {
    await this.setupProcessRepository.updateById(id, setupProcess);
  }

  @put('/setup-processes/{id}', {
    responses: {
      '204': {
        description: 'SetupProcess PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupProcess: SetupProcess,
  ): Promise<void> {
    await this.setupProcessRepository.replaceById(id, setupProcess);
  }

  @del('/setup-processes/{id}', {
    responses: {
      '204': {
        description: 'SetupProcess DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupProcessRepository.deleteById(id);
  }
}
