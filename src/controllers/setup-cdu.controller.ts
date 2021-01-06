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
import {SetupCdu} from '../models';
import {SetupCduRepository} from '../repositories';

export class SetupCduController {
  constructor(
    @repository(SetupCduRepository)
    public setupCduRepository : SetupCduRepository,
  ) {}

  @post('/setup-cdus', {
    responses: {
      '200': {
        description: 'SetupCdu model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupCdu)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCdu, {
            title: 'NewSetupCdu',
            
          }),
        },
      },
    })
    setupCdu: SetupCdu,
  ): Promise<SetupCdu> {
    return this.setupCduRepository.create(setupCdu);
  }

  @get('/setup-cdus/count', {
    responses: {
      '200': {
        description: 'SetupCdu model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupCdu) where?: Where<SetupCdu>,
  ): Promise<Count> {
    return this.setupCduRepository.count(where);
  }

  @get('/setup-cdus', {
    responses: {
      '200': {
        description: 'Array of SetupCdu model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupCdu, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupCdu) filter?: Filter<SetupCdu>,
  ): Promise<SetupCdu[]> {
    return this.setupCduRepository.find(filter);
  }

  @patch('/setup-cdus', {
    responses: {
      '200': {
        description: 'SetupCdu PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCdu, {partial: true}),
        },
      },
    })
    setupCdu: SetupCdu,
    @param.where(SetupCdu) where?: Where<SetupCdu>,
  ): Promise<Count> {
    return this.setupCduRepository.updateAll(setupCdu, where);
  }

  @get('/setup-cdus/{id}', {
    responses: {
      '200': {
        description: 'SetupCdu model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupCdu, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupCdu, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupCdu>
  ): Promise<SetupCdu> {
    return this.setupCduRepository.findById(id, filter);
  }

  @patch('/setup-cdus/{id}', {
    responses: {
      '204': {
        description: 'SetupCdu PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupCdu, {partial: true}),
        },
      },
    })
    setupCdu: SetupCdu,
  ): Promise<void> {
    await this.setupCduRepository.updateById(id, setupCdu);
  }

  @put('/setup-cdus/{id}', {
    responses: {
      '204': {
        description: 'SetupCdu PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupCdu: SetupCdu,
  ): Promise<void> {
    await this.setupCduRepository.replaceById(id, setupCdu);
  }

  @del('/setup-cdus/{id}', {
    responses: {
      '204': {
        description: 'SetupCdu DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupCduRepository.deleteById(id);
  }
}
