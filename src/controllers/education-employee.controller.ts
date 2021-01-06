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
  Education,
  Employee,
} from '../models';
import {EducationRepository} from '../repositories';

export class EducationEmployeeController {
  constructor(
    @repository(EducationRepository) protected educationRepository: EducationRepository,
  ) { }

  @get('/educations/{id}/employee', {
    responses: {
      '200': {
        description: 'Education has one Employee',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Employee),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Employee>,
  ): Promise<Employee> {
    return this.educationRepository.employee(id).get(filter);
  }

  @post('/educations/{id}/employee', {
    responses: {
      '200': {
        description: 'Education model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Education.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployeeInEducation',
            exclude: ['employee_id'],
            optional: ['educationId']
          }),
        },
      },
    }) employee: Omit<Employee, 'employee_id'>,
  ): Promise<Employee> {
    return this.educationRepository.employee(id).create(employee);
  }

  @patch('/educations/{id}/employee', {
    responses: {
      '200': {
        description: 'Education.Employee PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {partial: true}),
        },
      },
    })
    employee: Partial<Employee>,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.educationRepository.employee(id).patch(employee, where);
  }

  @del('/educations/{id}/employee', {
    responses: {
      '200': {
        description: 'Education.Employee DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.educationRepository.employee(id).delete(where);
  }
}
