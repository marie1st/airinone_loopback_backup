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
  Department,
  Employee,
} from '../models';
import {DepartmentRepository} from '../repositories';

export class DepartmentEmployeeController {
  constructor(
    @repository(DepartmentRepository) protected departmentRepository: DepartmentRepository,
  ) { }

  @get('/departments/{id}/employees', {
    responses: {
      '200': {
        description: 'Array of Department has many Employee',
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
    return this.departmentRepository.employees(id).find(filter);
  }

  @post('/departments/{id}/employees', {
    responses: {
      '200': {
        description: 'Department model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Department.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployeeInDepartment',
            exclude: ['employee_id'],
            optional: ['departmentId']
          }),
        },
      },
    }) employee: Omit<Employee, 'employee_id'>,
  ): Promise<Employee> {
    return this.departmentRepository.employees(id).create(employee);
  }

  @patch('/departments/{id}/employees', {
    responses: {
      '200': {
        description: 'Department.Employee PATCH success count',
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
    return this.departmentRepository.employees(id).patch(employee, where);
  }

  @del('/departments/{id}/employees', {
    responses: {
      '200': {
        description: 'Department.Employee DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.departmentRepository.employees(id).delete(where);
  }
}
