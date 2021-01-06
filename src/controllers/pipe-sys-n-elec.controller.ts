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
import {PipeSysNElec} from '../models';
import {PipeSysNElecRepository} from '../repositories';

export class PipeSysNElecController {
  constructor(
    @repository(PipeSysNElecRepository)
    public pipeSysNElecRepository : PipeSysNElecRepository,
  ) {}

  @post('/pipe-sys-n-elecs', {
    responses: {
      '200': {
        description: 'PipeSysNElec model instance',
        content: {'application/json': {schema: getModelSchemaRef(PipeSysNElec)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PipeSysNElec, {
            title: 'NewPipeSysNElec',
            
          }),
        },
      },
    })
    pipeSysNElec: PipeSysNElec,
  ): Promise<PipeSysNElec> {
    return this.pipeSysNElecRepository.create(pipeSysNElec);
  }

  @get('/pipe-sys-n-elecs/count', {
    responses: {
      '200': {
        description: 'PipeSysNElec model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PipeSysNElec) where?: Where<PipeSysNElec>,
  ): Promise<Count> {
    return this.pipeSysNElecRepository.count(where);
  }

  @get('/pipe-sys-n-elecs', {
    responses: {
      '200': {
        description: 'Array of PipeSysNElec model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PipeSysNElec, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PipeSysNElec) filter?: Filter<PipeSysNElec>,
  ): Promise<PipeSysNElec[]> {
    return this.pipeSysNElecRepository.find(filter);
  }

  @patch('/pipe-sys-n-elecs', {
    responses: {
      '200': {
        description: 'PipeSysNElec PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PipeSysNElec, {partial: true}),
        },
      },
    })
    pipeSysNElec: PipeSysNElec,
    @param.where(PipeSysNElec) where?: Where<PipeSysNElec>,
  ): Promise<Count> {
    return this.pipeSysNElecRepository.updateAll(pipeSysNElec, where);
  }

  @get('/pipe-sys-n-elecs/{id}', {
    responses: {
      '200': {
        description: 'PipeSysNElec model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PipeSysNElec, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PipeSysNElec, {exclude: 'where'}) filter?: FilterExcludingWhere<PipeSysNElec>
  ): Promise<PipeSysNElec> {
    return this.pipeSysNElecRepository.findById(id, filter);
  }

  @patch('/pipe-sys-n-elecs/{id}', {
    responses: {
      '204': {
        description: 'PipeSysNElec PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PipeSysNElec, {partial: true}),
        },
      },
    })
    pipeSysNElec: PipeSysNElec,
  ): Promise<void> {
    await this.pipeSysNElecRepository.updateById(id, pipeSysNElec);
  }

  @put('/pipe-sys-n-elecs/{id}', {
    responses: {
      '204': {
        description: 'PipeSysNElec PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pipeSysNElec: PipeSysNElec,
  ): Promise<void> {
    await this.pipeSysNElecRepository.replaceById(id, pipeSysNElec);
  }

  @del('/pipe-sys-n-elecs/{id}', {
    responses: {
      '204': {
        description: 'PipeSysNElec DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pipeSysNElecRepository.deleteById(id);
  }
}
