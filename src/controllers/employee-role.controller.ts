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
  Role,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeRoleController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/role', {
    responses: {
      '200': {
        description: 'Role belonging to Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Role)},
          },
        },
      },
    },
  })
  async getRole(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
  ): Promise<Role> {
    return this.employeeRepository.role(id);
  }
}
