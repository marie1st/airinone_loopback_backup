import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class AddLiquid extends Entity {
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
  liquid_to_sys: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_pass: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  is_standard: boolean;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  constructor(data?: Partial<AddLiquid>) {
    super(data);
  }
}

export interface AddLiquidRelations {
  // describe navigational properties here
}

export type AddLiquidWithRelations = AddLiquid & AddLiquidRelations;
