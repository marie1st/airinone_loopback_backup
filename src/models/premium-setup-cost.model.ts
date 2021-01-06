import {Entity, model, property, hasOne} from '@loopback/repository';
import {ProductNPrice} from './product-n-price.model';

@model()
export class PremiumSetupCost extends Entity {
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
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  btu: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasOne(() => ProductNPrice, {keyTo: 'premium_setup_id'})
  productNPrice: ProductNPrice;

  constructor(data?: Partial<PremiumSetupCost>) {
    super(data);
  }
}

export interface PremiumSetupCostRelations {
  // describe navigational properties here
}

export type PremiumSetupCostWithRelations = PremiumSetupCost & PremiumSetupCostRelations;
