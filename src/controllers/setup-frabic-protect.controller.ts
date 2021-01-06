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
import {SetupFrabicProtect} from '../models';
import {SetupFrabicProtectRepository} from '../repositories';

export class SetupFrabicProtectController {
  constructor(
    @repository(SetupFrabicProtectRepository)
    public setupFrabicProtectRepository : SetupFrabicProtectRepository,
  ) {}

  @post('/setup-frabic-protects', {
    responses: {
      '200': {
        description: 'SetupFrabicProtect model instance',
        content: {'application/json': {schema: getModelSchemaRef(SetupFrabicProtect)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFrabicProtect, {
            title: 'NewSetupFrabicProtect',
            
          }),
        },
      },
    })
    setupFrabicProtect: SetupFrabicProtect,
  ): Promise<SetupFrabicProtect> {
    return this.setupFrabicProtectRepository.create(setupFrabicProtect);
  }

  @get('/setup-frabic-protects/count', {
    responses: {
      '200': {
        description: 'SetupFrabicProtect model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SetupFrabicProtect) where?: Where<SetupFrabicProtect>,
  ): Promise<Count> {
    return this.setupFrabicProtectRepository.count(where);
  }

  @get('/setup-frabic-protects', {
    responses: {
      '200': {
        description: 'Array of SetupFrabicProtect model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SetupFrabicProtect, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SetupFrabicProtect) filter?: Filter<SetupFrabicProtect>,
  ): Promise<SetupFrabicProtect[]> {
    return this.setupFrabicProtectRepository.find(filter);
  }

  @patch('/setup-frabic-protects', {
    responses: {
      '200': {
        description: 'SetupFrabicProtect PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFrabicProtect, {partial: true}),
        },
      },
    })
    setupFrabicProtect: SetupFrabicProtect,
    @param.where(SetupFrabicProtect) where?: Where<SetupFrabicProtect>,
  ): Promise<Count> {
    return this.setupFrabicProtectRepository.updateAll(setupFrabicProtect, where);
  }

  @get('/setup-frabic-protects/{id}', {
    responses: {
      '200': {
        description: 'SetupFrabicProtect model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SetupFrabicProtect, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SetupFrabicProtect, {exclude: 'where'}) filter?: FilterExcludingWhere<SetupFrabicProtect>
  ): Promise<SetupFrabicProtect> {
    return this.setupFrabicProtectRepository.findById(id, filter);
  }

  @patch('/setup-frabic-protects/{id}', {
    responses: {
      '204': {
        description: 'SetupFrabicProtect PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SetupFrabicProtect, {partial: true}),
        },
      },
    })
    setupFrabicProtect: SetupFrabicProtect,
  ): Promise<void> {
    await this.setupFrabicProtectRepository.updateById(id, setupFrabicProtect);
  }

  @put('/setup-frabic-protects/{id}', {
    responses: {
      '204': {
        description: 'SetupFrabicProtect PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() setupFrabicProtect: SetupFrabicProtect,
  ): Promise<void> {
    await this.setupFrabicProtectRepository.replaceById(id, setupFrabicProtect);
  }

  @del('/setup-frabic-protects/{id}', {
    responses: {
      '204': {
        description: 'SetupFrabicProtect DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.setupFrabicProtectRepository.deleteById(id);
  }
}
