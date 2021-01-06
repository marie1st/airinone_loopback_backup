import {Entity, hasOne, model, property} from '@loopback/repository';
import {Employee} from './employee.model';

@model()
export class Education extends Entity {
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

  @hasOne(() => Employee, {keyFrom: 'id'})
  employee: Employee;

  constructor(data?: Partial<Education>) {
    super(data);
  }
}

export interface EducationRelations {
  // describe navigational properties here
}

export type EducationWithRelations = Education & EducationRelations;
