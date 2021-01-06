import {Entity, model, property} from '@loopback/repository';

@model()
export class PromotionalProductsPrice extends Entity {
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
  })
  description?: string;


  constructor(data?: Partial<PromotionalProductsPrice>) {
    super(data);
  }
}

export interface PromotionalProductsPriceRelations {
  // describe navigational properties here
}

export type PromotionalProductsPriceWithRelations = PromotionalProductsPrice & PromotionalProductsPriceRelations;
