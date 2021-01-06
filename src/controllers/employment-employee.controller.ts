import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody
} from '@loopback/rest';
import {
  Employee, Employment
} from '../models';
import {EmploymentRepository} from '../repositories';

export class EmploymentEmployeeController {
  constructor(
    @repository(EmploymentRepository) protected employmentRepository: EmploymentRepository,
  ) { }

  @get('/employments/{id}/employees', {
    responses: {
      '200': {
        description: 'Array of Employment has many Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Employee)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Employee>,
  ): Promise<Employee[]> {
    return this.employmentRepository.employees(id).find(filter);
  }

  @post('/employments/{id}/employees', {
    responses: {
      '200': {
        description: 'Employment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Employment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployeeInEmployment',
            exclude: ['employee_id'],
            optional: ['employement_id']
          }),
        },
      },
    }) employee: Omit<Employee, 'employee_id'>,
  ): Promise<Employee> {
    return this.employmentRepository.employees(id).create(employee);
  }

  @patch('/employments/{id}/employees', {
    responses: {
      '200': {
        description: 'Employment.Employee PATCH success count',
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
    return this.employmentRepository.employees(id).patch(employee, where);
  }

  @del('/employments/{id}/employees', {
    responses: {
      '200': {
        description: 'Employment.Employee DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.employmentRepository.employees(id).delete(where);
  }
}
