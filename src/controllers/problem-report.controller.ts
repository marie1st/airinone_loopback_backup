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
import {ProblemReport} from '../models';
import {ProblemReportRepository} from '../repositories';

export class ProblemReportController {
  constructor(
    @repository(ProblemReportRepository)
    public problemReportRepository : ProblemReportRepository,
  ) {}

  @post('/problem-reports', {
    responses: {
      '200': {
        description: 'ProblemReport model instance',
        content: {'application/json': {schema: getModelSchemaRef(ProblemReport)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProblemReport, {
            title: 'NewProblemReport',
            
          }),
        },
      },
    })
    problemReport: ProblemReport,
  ): Promise<ProblemReport> {
    return this.problemReportRepository.create(problemReport);
  }

  @get('/problem-reports/count', {
    responses: {
      '200': {
        description: 'ProblemReport model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ProblemReport) where?: Where<ProblemReport>,
  ): Promise<Count> {
    return this.problemReportRepository.count(where);
  }

  @get('/problem-reports', {
    responses: {
      '200': {
        description: 'Array of ProblemReport model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ProblemReport, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ProblemReport) filter?: Filter<ProblemReport>,
  ): Promise<ProblemReport[]> {
    return this.problemReportRepository.find(filter);
  }

  @patch('/problem-reports', {
    responses: {
      '200': {
        description: 'ProblemReport PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProblemReport, {partial: true}),
        },
      },
    })
    problemReport: ProblemReport,
    @param.where(ProblemReport) where?: Where<ProblemReport>,
  ): Promise<Count> {
    return this.problemReportRepository.updateAll(problemReport, where);
  }

  @get('/problem-reports/{id}', {
    responses: {
      '200': {
        description: 'ProblemReport model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProblemReport, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProblemReport, {exclude: 'where'}) filter?: FilterExcludingWhere<ProblemReport>
  ): Promise<ProblemReport> {
    return this.problemReportRepository.findById(id, filter);
  }

  @patch('/problem-reports/{id}', {
    responses: {
      '204': {
        description: 'ProblemReport PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProblemReport, {partial: true}),
        },
      },
    })
    problemReport: ProblemReport,
  ): Promise<void> {
    await this.problemReportRepository.updateById(id, problemReport);
  }

  @put('/problem-reports/{id}', {
    responses: {
      '204': {
        description: 'ProblemReport PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() problemReport: ProblemReport,
  ): Promise<void> {
    await this.problemReportRepository.replaceById(id, problemReport);
  }

  @del('/problem-reports/{id}', {
    responses: {
      '204': {
        description: 'ProblemReport DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.problemReportRepository.deleteById(id);
  }
}
