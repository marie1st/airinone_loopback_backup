import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  SetupProcess,
  SetupProcessPic,
} from '../models';
import {SetupProcessRepository} from '../repositories';

export class SetupProcessSetupProcessPicController {
  constructor(
    @repository(SetupProcessRepository) protected setupProcessRepository: SetupProcessRepository,
  ) { }

  @get('/setup-processes/{id}/setup-process-pics', {
    responses: {
      '200': {
        description: 'Array of SetupProcess has many SetupProcessPic',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SetupProcessPic)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<SetupProcessPic>,
  ): Promise<SetupProcessPic[]> {
    return this.setupProcessRepository.setupProcessPicsProcess(id).find(filter);
  }

  @post('/setup-processes/{id}/setup-process-pics', {
    responses: {
      '200': {
        description: 'SetupProcess model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupProcessPic)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof SetupProcess.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {
            title: 'NewSetupProcessPicInSetupProcess',
            exclude: ['id'],
            optional: ['setup_process_id']
          }),
        },
      },
    }) setupProcessPic: Omit<SetupProcessPic, 'id'>,
  ): Promise<SetupProcessPic> {
    return this.setupProcessRepository.setupProcessPicsProcess(id).create(setupProcessPic);
  }

  @patch('/setup-processes/{id}/setup-process-pics', {
    responses: {
      '200': {
        description: 'SetupProcess.SetupProcessPic PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupProcessPic, {partial: true}),
        },
      },
    })
    setupProcessPic: Partial<SetupProcessPic>,
    @param.query.object('where', getWhereSchemaFor(SetupProcessPic)) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.setupProcessRepository.setupProcessPicsProcess(id).patch(setupProcessPic, where);
  }

  @del('/setup-processes/{id}/setup-process-pics', {
    responses: {
      '200': {
        description: 'SetupProcess.SetupProcessPic DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(SetupProcessPic)) where?: Where<SetupProcessPic>,
  ): Promise<Count> {
    return this.setupProcessRepository.setupProcessPicsProcess(id).delete(where);
  }
}
