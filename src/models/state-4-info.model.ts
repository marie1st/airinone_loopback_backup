import {Entity, model, property, hasOne} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class State4Info extends Entity {
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
  model: string;

  @property({
    type: 'string',
    required: true,
  })
  serial: string;

  @property({
    type: 'date',
    required: true,
  })
  warranty: string;

  @property({
    type: 'date',
    required: true,
  })
  clean_air_con: string;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

  @hasOne(() => OrderProduct, {keyTo: 'order_id'})
  orderProduct: OrderProduct;

  constructor(data?: Partial<State4Info>) {
    super(data);
  }
}

export interface State4InfoRelations {
  // describe navigational properties here
}

export type State4InfoWithRelations = State4Info & State4InfoRelations;
