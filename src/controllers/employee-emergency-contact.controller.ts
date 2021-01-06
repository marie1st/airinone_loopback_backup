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
  EmergencyContact,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeEmergencyContactController {
  constructor(
    @repository(EmployeeRepository) protected employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/emergency-contact', {
    responses: {
      '200': {
        description: 'Employee has one EmergencyContact',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EmergencyContact),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<EmergencyContact>,
  ): Promise<EmergencyContact> {
    return this.employeeRepository.emergencyContact(id).get(filter);
  }

  @post('/employees/{id}/emergency-contact', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {'application/json': {schema: getModelSchemaRef(EmergencyContact)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Employee.prototype.employee_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmergencyContact, {
            title: 'NewEmergencyContactInEmployee',
            exclude: ['id'],
            optional: ['employeeId']
          }),
        },
      },
    }) emergencyContact: Omit<EmergencyContact, 'id'>,
  ): Promise<EmergencyContact> {
    return this.employeeRepository.emergencyContact(id).create(emergencyContact);
  }

  @patch('/employees/{id}/emergency-contact', {
    responses: {
      '200': {
        description: 'Employee.EmergencyContact PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmergencyContact, {partial: true}),
        },
      },
    })
    emergencyContact: Partial<EmergencyContact>,
    @param.query.object('where', getWhereSchemaFor(EmergencyContact)) where?: Where<EmergencyContact>,
  ): Promise<Count> {
    return this.employeeRepository.emergencyContact(id).patch(emergencyContact, where);
  }

  @del('/employees/{id}/emergency-contact', {
    responses: {
      '200': {
        description: 'Employee.EmergencyContact DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(EmergencyContact)) where?: Where<EmergencyContact>,
  ): Promise<Count> {
    return this.employeeRepository.emergencyContact(id).delete(where);
  }
}
