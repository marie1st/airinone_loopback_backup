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
  Role,
  Employee,
} from '../models';
import {RoleRepository} from '../repositories';

export class RoleEmployeeController {
  constructor(
    @repository(RoleRepository) protected roleRepository: RoleRepository,
  ) { }

  @get('/roles/{id}/employees', {
    responses: {
      '200': {
        description: 'Array of Role has many Employee',
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
    return this.roleRepository.employees(id).find(filter);
  }

  @post('/roles/{id}/employees', {
    responses: {
      '200': {
        description: 'Role model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Role.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployeeInRole',
            exclude: ['employee_id'],
            optional: ['roleId']
          }),
        },
      },
    }) employee: Omit<Employee, 'employee_id'>,
  ): Promise<Employee> {
    return this.roleRepository.employees(id).create(employee);
  }

  @patch('/roles/{id}/employees', {
    responses: {
      '200': {
        description: 'Role.Employee PATCH success count',
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
    return this.roleRepository.employees(id).patch(employee, where);
  }

  @del('/roles/{id}/employees', {
    responses: {
      '200': {
        description: 'Role.Employee DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.roleRepository.employees(id).delete(where);
  }
}
