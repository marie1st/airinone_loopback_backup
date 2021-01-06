import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class VacummTest extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_pass: boolean;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  constructor(data?: Partial<VacummTest>) {
    super(data);
  }
}

export interface VacummTestRelations {
  // describe navigational properties here
}

export type VacummTestWithRelations = VacummTest & VacummTestRelations;
