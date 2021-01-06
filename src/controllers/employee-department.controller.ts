import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Employee,
  Department,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeDepartmentController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/department', {
    responses: {
      '200': {
        description: 'Department belonging to Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Department)},
          },
        },
      },
    },
  })
  async getDepartment(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
  ): Promise<Department> {
    return this.employeeRepository.department(id);
  }
}
