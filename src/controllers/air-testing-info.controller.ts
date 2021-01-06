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
import {AirTestingInfo} from '../models';
import {AirTestingInfoRepository} from '../repositories';

export class AirTestingInfoController {
  constructor(
    @repository(AirTestingInfoRepository)
    public airTestingInfoRepository : AirTestingInfoRepository,
  ) {}

  @post('/air-testing-infos', {
    responses: {
      '200': {
        description: 'AirTestingInfo model instance',
        content: {'application/json': {schema: getModelSchemaRef(AirTestingInfo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AirTestingInfo, {
            title: 'NewAirTestingInfo',
            
          }),
        },
      },
    })
    airTestingInfo: AirTestingInfo,
  ): Promise<AirTestingInfo> {
    return this.airTestingInfoRepository.create(airTestingInfo);
  }

  @get('/air-testing-infos/count', {
    responses: {
      '200': {
        description: 'AirTestingInfo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AirTestingInfo) where?: Where<AirTestingInfo>,
  ): Promise<Count> {
    return this.airTestingInfoRepository.count(where);
  }

  @get('/air-testing-infos', {
    responses: {
      '200': {
        description: 'Array of AirTestingInfo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AirTestingInfo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AirTestingInfo) filter?: Filter<AirTestingInfo>,
  ): Promise<AirTestingInfo[]> {
    return this.airTestingInfoRepository.find(filter);
  }

  @patch('/air-testing-infos', {
    responses: {
      '200': {
        description: 'AirTestingInfo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AirTestingInfo, {partial: true}),
        },
      },
    })
    airTestingInfo: AirTestingInfo,
    @param.where(AirTestingInfo) where?: Where<AirTestingInfo>,
  ): Promise<Count> {
    return this.airTestingInfoRepository.updateAll(airTestingInfo, where);
  }

  @get('/air-testing-infos/{id}', {
    responses: {
      '200': {
        description: 'AirTestingInfo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AirTestingInfo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AirTestingInfo, {exclude: 'where'}) filter?: FilterExcludingWhere<AirTestingInfo>
  ): Promise<AirTestingInfo> {
    return this.airTestingInfoRepository.findById(id, filter);
  }

  @patch('/air-testing-infos/{id}', {
    responses: {
      '204': {
        description: 'AirTestingInfo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AirTestingInfo, {partial: true}),
        },
      },
    })
    airTestingInfo: AirTestingInfo,
  ): Promise<void> {
    await this.airTestingInfoRepository.updateById(id, airTestingInfo);
  }

  @put('/air-testing-infos/{id}', {
    responses: {
      '204': {
        description: 'AirTestingInfo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() airTestingInfo: AirTestingInfo,
  ): Promise<void> {
    await this.airTestingInfoRepository.replaceById(id, airTestingInfo);
  }

  @del('/air-testing-infos/{id}', {
    responses: {
      '204': {
        description: 'AirTestingInfo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.airTestingInfoRepository.deleteById(id);
  }
}
