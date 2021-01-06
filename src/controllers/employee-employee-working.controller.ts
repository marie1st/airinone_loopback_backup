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
  Employee,
  EmployeeWorking,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeEmployeeWorkingController {
  constructor(
    @repository(EmployeeRepository) protected employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/employee-workings', {
    responses: {
      '200': {
        description: 'Array of Employee has many EmployeeWorking',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EmployeeWorking)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EmployeeWorking>,
  ): Promise<EmployeeWorking[]> {
    return this.employeeRepository.employeeWorkings(id).find(filter);
  }

  @post('/employees/{id}/employee-workings', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {'application/json': {schema: getModelSchemaRef(EmployeeWorking)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {
            title: 'NewEmployeeWorkingInEmployee',
            exclude: ['id'],
            optional: ['employee_id']
          }),
        },
      },
    }) employeeWorking: Omit<EmployeeWorking, 'id'>,
  ): Promise<EmployeeWorking> {
    return this.employeeRepository.employeeWorkings(id).create(employeeWorking);
  }

  @patch('/employees/{id}/employee-workings', {
    responses: {
      '200': {
        description: 'Employee.EmployeeWorking PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeWorking, {partial: true}),
        },
      },
    })
    employeeWorking: Partial<EmployeeWorking>,
    @param.query.object('where', getWhereSchemaFor(EmployeeWorking)) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.employeeRepository.employeeWorkings(id).patch(employeeWorking, where);
  }

  @del('/employees/{id}/employee-workings', {
    responses: {
      '200': {
        description: 'Employee.EmployeeWorking DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EmployeeWorking)) where?: Where<EmployeeWorking>,
  ): Promise<Count> {
    return this.employeeRepository.employeeWorkings(id).delete(where);
  }
}
