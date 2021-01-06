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
import {Employee} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository : EmployeeRepository,
  ) {}

  @post('/employees', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployee',
            
          }),
        },
      },
    })
    employee: Employee,
  ): Promise<Employee> {
    return this.employeeRepository.create(employee);
  }

  @get('/employees/count', {
    responses: {
      '200': {
        description: 'Employee model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Employee) where?: Where<Employee>,
  ): Promise<Count> {
    return this.employeeRepository.count(where);
  }

  @get('/employees', {
    responses: {
      '200': {
        description: 'Array of Employee model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Employee, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Employee) filter?: Filter<Employee>,
  ): Promise<Employee[]> {
    return this.employeeRepository.find(filter);
  }

  @patch('/employees', {
    responses: {
      '200': {
        description: 'Employee PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {partial: true}),
        },
      },
    })
    employee: Employee,
    @param.where(Employee) where?: Where<Employee>,
  ): Promise<Count> {
    return this.employeeRepository.updateAll(employee, where);
  }

  @get('/employees/{id}', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Employee, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Employee, {exclude: 'where'}) filter?: FilterExcludingWhere<Employee>
  ): Promise<Employee> {
    return this.employeeRepository.findById(id, filter);
  }

  @patch('/employees/{id}', {
    responses: {
      '204': {
        description: 'Employee PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {partial: true}),
        },
      },
    })
    employee: Employee,
  ): Promise<void> {
    await this.employeeRepository.updateById(id, employee);
  }

  @put('/employees/{id}', {
    responses: {
      '204': {
        description: 'Employee PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() employee: Employee,
  ): Promise<void> {
    await this.employeeRepository.replaceById(id, employee);
  }

  @del('/employees/{id}', {
    responses: {
      '204': {
        description: 'Employee DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.employeeRepository.deleteById(id);
  }
}
