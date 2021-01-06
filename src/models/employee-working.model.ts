import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Employee} from './employee.model';
import {OrderProduct} from './order-product.model';

@model()
export class EmployeeWorking extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  date: string;
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => Employee, {name: 'Employee'})
  employee_id: string;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  constructor(data?: Partial<EmployeeWorking>) {
    super(data);
  }
}

export interface EmployeeWorkingRelations {
  // describe navigational properties here
}

export type EmployeeWorkingWithRelations = EmployeeWorking & EmployeeWorkingRelations;
