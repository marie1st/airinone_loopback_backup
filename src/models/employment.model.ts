import {Entity, model, property, hasMany} from '@loopback/repository';
import {Employee} from './employee.model';

@model()
export class Employment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Employee)
  employees: Employee[];

  constructor(data?: Partial<Employment>) {
    super(data);
  }
}

export interface EmploymentRelations {
  // describe navigational properties here
}

export type EmploymentWithRelations = Employment & EmploymentRelations;
