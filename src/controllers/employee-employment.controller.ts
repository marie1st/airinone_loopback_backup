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
  Employment,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeEmploymentController {
  constructor(
    @repository(EmployeeRepository)
    public employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/employment', {
    responses: {
      '200': {
        description: 'Employment belonging to Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Employment)},
          },
        },
      },
    },
  })
  async getEmployment(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
  ): Promise<Employment> {
    return this.employeeRepository.Employment(id);
  }
}
