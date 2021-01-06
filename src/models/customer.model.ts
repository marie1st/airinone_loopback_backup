import {Entity, hasMany, model, property} from '@loopback/repository';
import {OrderProduct} from './order-product.model';

@model()
export class Customer extends Entity {
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
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone_number: string;

  @property({
    type: 'string',
  })
  id_line?: string;

  @property({
    type: 'string',
  })
  occupation?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  facebook?: string;

  @property({
    type: 'string',
  })
  profile_pic?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_card_pic: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  province: string;

  @property({
    type: 'string',
    required: true,
  })
  subdistrict: string;

  @property({
    type: 'string',
    required: true,
  })
  district: string;

  @property({
    type: 'string',
    required: true,
  })
  postcode: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @hasMany(() => OrderProduct, {keyTo: 'order_by'})
  orderProducts: OrderProduct[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
