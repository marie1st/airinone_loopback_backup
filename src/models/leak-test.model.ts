import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class LeakTest extends Entity {
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

  constructor(data?: Partial<LeakTest>) {
    super(data);
  }
}

export interface LeakTestRelations {
  // describe navigational properties here
}

export type LeakTestWithRelations = LeakTest & LeakTestRelations;
