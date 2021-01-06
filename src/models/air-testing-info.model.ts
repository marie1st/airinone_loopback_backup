import {Entity, model, property, hasMany} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class AirTestingInfo extends Entity {
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
  remote_temp: number;

  @property({
    type: 'number',
    required: true,
  })
  fcu_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  pipe_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  elec_current: number;

  @property({
    type: 'number',
    required: true,
  })
  cdu_temp_back: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_pressure_back: number;

  @property({
    type: 'number',
    required: true,
  })
  phy_temp: number;

  @property({
    type: 'number',
    required: true,
  })
  fcu_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  pipe_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  elec_volt: number;

  @property({
    type: 'number',
    required: true,
  })
  cdu_temp_out: number;

  @property({
    type: 'number',
    required: true,
  })
  liquid_pressure_out: number;

  @property({
    type: 'string',
    required: true,
  })
  order_id: string;

  @hasMany(() => OrderProduct, {keyTo: 'order_id'})
  orderProducts: OrderProduct[];

  constructor(data?: Partial<AirTestingInfo>) {
    super(data);
  }
}

export interface AirTestingInfoRelations {
  // describe navigational properties here
}

export type AirTestingInfoWithRelations = AirTestingInfo & AirTestingInfoRelations;
