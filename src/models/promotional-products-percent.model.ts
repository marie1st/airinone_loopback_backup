import {Entity, model, property} from '@loopback/repository';

@model()
export class PromotionalProductsPercent extends Entity {
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
  percent_discount: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<PromotionalProductsPercent>) {
    super(data);
  }
}

export interface PromotionalProductsPercentRelations {
  // describe navigational properties here
}

export type PromotionalProductsPercentWithRelations = PromotionalProductsPercent & PromotionalProductsPercentRelations;
