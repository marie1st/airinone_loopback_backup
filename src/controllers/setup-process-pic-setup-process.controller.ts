import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SetupProcessPic,
  SetupProcess,
} from '../models';
import {SetupProcessPicRepository} from '../repositories';

export class SetupProcessPicSetupProcessController {
  constructor(
    @repository(SetupProcessPicRepository)
    public setupProcessPicRepository: SetupProcessPicRepository,
  ) { }

  @get('/setup-process-pics/{id}/setup-process', {
    responses: {
      '200': {
        description: 'SetupProcess belonging to SetupProcessPic',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SetupProcess)},
          },
        },
      },
    },
  })
  async getSetupProcess(
    @param.path.number('id') id: typeof SetupProcessPic.prototype.id,
  ): Promise<SetupProcess> {
    return this.setupProcessPicRepository.SetupProcess(id);
  }
}
