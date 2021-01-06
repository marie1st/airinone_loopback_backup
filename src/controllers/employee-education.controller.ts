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
  Education,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeEducationController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/education', {
    responses: {
      '200': {
        description: 'Education belonging to Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Education)},
          },
        },
      },
    },
  })
  async getEducation(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
  ): Promise<Education> {
    return this.employeeRepository.education(id);
  }
}
