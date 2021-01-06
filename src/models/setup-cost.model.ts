import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class SetupCost extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cost: number;

  @property({
    type: 'string',
    required: true,
  })
  pipe_size: string;

  @property({
    type: 'string',
    required: true,
  })
  pipe_distance: string;

  @belongsTo(() => OrderProduct, {name: 'orderProduct'})
  order_id: string;

  constructor(data?: Partial<SetupCost>) {
    super(data);
  }
}

export interface SetupCostRelations {
  // describe navigational properties here
}

export type SetupCostWithRelations = SetupCost & SetupCostRelations;
