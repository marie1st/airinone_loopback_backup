import {Entity, model, property} from '@loopback/repository';

@model()
export class UsedEquipment extends Entity {
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
  classifier: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'date',
  })
  created_at?: string;


  constructor(data?: Partial<UsedEquipment>) {
    super(data);
  }
}

export interface UsedEquipmentRelations {
  // describe navigational properties here
}

export type UsedEquipmentWithRelations = UsedEquipment & UsedEquipmentRelations;
