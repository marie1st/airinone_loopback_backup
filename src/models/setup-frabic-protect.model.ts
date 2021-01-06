import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class SetupFrabicProtect extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
  })
  is_good?: boolean;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  constructor(data?: Partial<SetupFrabicProtect>) {
    super(data);
  }
}

export interface SetupFrabicProtectRelations {
  // describe navigational properties here
}

export type SetupFrabicProtectWithRelations = SetupFrabicProtect & SetupFrabicProtectRelations;
