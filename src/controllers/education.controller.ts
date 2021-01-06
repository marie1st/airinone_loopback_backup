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
import {Education} from '../models';
import {EducationRepository} from '../repositories';

export class EducationController {
  constructor(
    @repository(EducationRepository)
    public educationRepository : EducationRepository,
  ) {}

  @post('/educations', {
    responses: {
      '200': {
        description: 'Education model instance',
        content: {'application/json': {schema: getModelSchemaRef(Education)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Education, {
            title: 'NewEducation',
            
          }),
        },
      },
    })
    education: Education,
  ): Promise<Education> {
    return this.educationRepository.create(education);
  }

  @get('/educations/count', {
    responses: {
      '200': {
        description: 'Education model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Education) where?: Where<Education>,
  ): Promise<Count> {
    return this.educationRepository.count(where);
  }

  @get('/educations', {
    responses: {
      '200': {
        description: 'Array of Education model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Education, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Education) filter?: Filter<Education>,
  ): Promise<Education[]> {
    return this.educationRepository.find(filter);
  }

  @patch('/educations', {
    responses: {
      '200': {
        description: 'Education PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Education, {partial: true}),
        },
      },
    })
    education: Education,
    @param.where(Education) where?: Where<Education>,
  ): Promise<Count> {
    return this.educationRepository.updateAll(education, where);
  }

  @get('/educations/{id}', {
    responses: {
      '200': {
        description: 'Education model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Education, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Education, {exclude: 'where'}) filter?: FilterExcludingWhere<Education>
  ): Promise<Education> {
    return this.educationRepository.findById(id, filter);
  }

  @patch('/educations/{id}', {
    responses: {
      '204': {
        description: 'Education PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Education, {partial: true}),
        },
      },
    })
    education: Education,
  ): Promise<void> {
    await this.educationRepository.updateById(id, education);
  }

  @put('/educations/{id}', {
    responses: {
      '204': {
        description: 'Education PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() education: Education,
  ): Promise<void> {
    await this.educationRepository.replaceById(id, education);
  }

  @del('/educations/{id}', {
    responses: {
      '204': {
        description: 'Education DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.educationRepository.deleteById(id);
  }
}
