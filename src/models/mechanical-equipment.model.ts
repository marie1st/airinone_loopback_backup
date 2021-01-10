import {Entity, model, property, hasMany} from '@loopback/repository';
import {WithdrawMechanicalEquipment} from './withdraw-mechanical-equipment.model';

@model({settings: {strict: false}})
export class MechanicalEquipment extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

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
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  created_at: string;

  @hasMany(() => WithdrawMechanicalEquipment, {keyTo: 'meid'})
  withdrawMechanicalEquipments: WithdrawMechanicalEquipment[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MechanicalEquipment>) {
    super(data);
  }
}

export interface MechanicalEquipmentRelations {
  // describe navigational properties here
}

export type MechanicalEquipmentWithRelations = MechanicalEquipment & MechanicalEquipmentRelations;
