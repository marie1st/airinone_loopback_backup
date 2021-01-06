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
import {SetupProcessPic} from '../models';
import {SetupProcessPicRepository} from '../repositories';

export class SetupProcessPicController {
  constructor(
    @repository(SetupProcessPicRepository)
    public setupProcessPicRepository : SetupProcessPicRepository,
  ) {}

  @post('/setup-process-pics', {
    responses: {
      '200': {
        description: 'SetupProcessPic model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupProcessPic)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {
            title: 'NewSetupProcessPic',
            
          }),
        },
      },
    })
    setupProcessPic: SetupProcessPic,
  ): Promise<SetupProcessPic> {
    return this.setupProcessPicRepository.create(setupProcessPic);
  }

  @get('/setup-process-pics/count', {
    responses: {
      '200': {
        description: 'SetupProcessPic model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupProcessPic) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.setupProcessPicRepository.count(where);
  }

  @get('/setup-process-pics', {
    responses: {
      '200': {
        description: 'Array of SetupProcessPic model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupProcessPic, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupProcessPic) filter?: Filter<SetupProcessPic>,
  ): Promise<SetupProcessPic[]> {
    return this.setupProcessPicRepository.find(filter);
  }

  @patch('/setup-process-pics', {
    responses: {
      '200': {
        description: 'SetupProcessPic PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {partial: true}),
        },
      },
    })
    setupProcessPic: SetupProcessPic,
    @param.where(SetupProcessPic) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.setupProcessPicRepository.updateAll(setupProcessPic, where);
  }

  @get('/setup-process-pics/{id}', {
    responses: {
      '200': {
        description: 'SetupProcessPic model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupProcessPic, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupProcessPic, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupProcessPic>
  ): Promise<SetupProcessPic> {
    return this.setupProcessPicRepository.findById(id, filter);
  }

  @patch('/setup-process-pics/{id}', {
    responses: {
      '204': {
        description: 'SetupProcessPic PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {partial: true}),
        },
      },
    })
    setupProcessPic: SetupProcessPic,
  ): Promise<void> {
    await this.setupProcessPicRepository.updateById(id, setupProcessPic);
  }

  @put('/setup-process-pics/{id}', {
    responses: {
      '204': {
        description: 'SetupProcessPic PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupProcessPic: SetupProcessPic,
  ): Promise<void> {
    await this.setupProcessPicRepository.replaceById(id, setupProcessPic);
  }

  @del('/setup-process-pics/{id}', {
    responses: {
      '204': {
        description: 'SetupProcessPic DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupProcessPicRepository.deleteById(id);
  }
}
