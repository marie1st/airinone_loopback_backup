import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Employee} from './employee.model';

@model()
export class EmergencyContact extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'string',
    required: true,
  })
  relationship: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => Employee, {name: 'Employee'})
  employee_id: string;

  @property({
    type: 'string',
  })
  employeeId?: string;

  constructor(data?: Partial<EmergencyContact>) {
    super(data);
  }
}

export interface EmergencyContactRelations {
  // describe navigational properties here
}

export type EmergencyContactWithRelations = EmergencyContact & EmergencyContactRelations;
