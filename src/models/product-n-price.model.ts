import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Wage} from './wage.model';
import {ItemPrice} from './item-price.model';
import {PremiumSetupCost} from './premium-setup-cost.model';

@model({settings: {strict: false}})
export class ProductNPrice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  btu: string;

  @property({
    type: 'number',
    required: true,
  })
  selling_price: number;

  @property({
    type: 'number',
    required: true,
  })
  promotion_id: number;

  @property({
    type: 'number',
    required: true,
  })
  cost: number;
  @property({
    type: 'number',
    required: true,
  })
  other_cost: number;

  @property({
    type: 'number',
    required: true,
  })
  total_cost: number;

  @property({
    type: 'number',
    required: true,
  })
  profit: number;

  @property({
    type: 'number',
    required: true,
  })
  profit_percent: number;

  @belongsTo(() => Wage, {name: 'wageid'})
  wage_id: number;

  @belongsTo(() => ItemPrice, {name: 'Itemprice'})
  item_price_id: number;

  @belongsTo(() => PremiumSetupCost, {name: 'PremiumSetup'})
  premium_setup_id: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProductNPrice>) {
    super(data);
  }
}

export interface ProductNPriceRelations {
  // describe navigational properties here
}

export type ProductNPriceWithRelations = ProductNPrice & ProductNPriceRelations;
