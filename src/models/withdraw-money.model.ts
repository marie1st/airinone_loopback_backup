import {belongsTo, Entity, model, property} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class WithdrawMoney extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
    required: true,
  })
  id: Number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  amount_of_money: number;

  @property({
    type: 'boolean',
    required: true,
  })
  is_approved: boolean;

  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  constructor(data?: Partial<WithdrawMoney>) {
    super(data);
  }
}

export interface WithdrawMoneyRelations {
  // describe navigational properties here
}

export type WithdrawMoneyWithRelations = WithdrawMoney & WithdrawMoneyRelations;
