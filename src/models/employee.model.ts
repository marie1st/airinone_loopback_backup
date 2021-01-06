import {Entity, model, property, hasOne, belongsTo, hasMany} from '@loopback/repository';
import {EmergencyContact} from './emergency-contact.model';
import {Education} from './education.model';
import {Department} from './department.model';
import {Role} from './role.model';
import {Employment} from './employment.model';
import {EmployeeWorking} from './employee-working.model';

@model()
export class Employee extends Entity {
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
  })
  birth_date?: string;

  @property({
    type: 'number',
  })
  education_id?: number;

  @property({
    type: 'string',
  })
  talent?: string;

  @property({
    type: 'string',
  })
  etc?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  id_line?: string;

  @property({
    type: 'string',
  })
  facebook?: string;

  @property({
    type: 'string',
  })
  profile_pic?: string;

  @property({
    type: 'string',
  })
  id_card_pic?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  province?: string;

  @property({
    type: 'string',
  })
  subdistrict?: string;

  @property({
    type: 'string',
  })
  postcode?: string;


  @property({
    type: 'date',
  })
  start_date?: string;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'string',
    required: true,
  })
  super_id: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  employee_id: string;

  @hasOne(() => EmergencyContact)
  emergencyContact: EmergencyContact;

  @belongsTo(() => Education)
  educationId: number;

  @belongsTo(() => Department)
  departmentId: number;

  @belongsTo(() => Role)
  roleId: number;

  @belongsTo(() => Employment)
  employmentId: number;

  @belongsTo(() => Employment, {name: 'Employment'})
  employement_id: number;

  @hasMany(() => EmployeeWorking, {keyTo: 'employee_id'})
  employeeWorkings: EmployeeWorking[];

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
