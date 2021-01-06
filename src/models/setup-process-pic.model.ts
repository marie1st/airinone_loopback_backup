import {Entity, model, property, belongsTo} from '@loopback/repository';
import {OrderProduct} from './order-product.model';
import {SetupProcess} from './setup-process.model';

@model()
export class SetupProcessPic extends Entity {
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
  pic: string;
  @belongsTo(() => OrderProduct, {name: 'OrderProduct'})
  order_id: string;

  @belongsTo(() => SetupProcess, {name: 'SetupProcess'})
  setup_process_id: number;

  constructor(data?: Partial<SetupProcessPic>) {
    super(data);
  }
}

export interface SetupProcessPicRelations {
  // describe navigational properties here
}

export type SetupProcessPicWithRelations = SetupProcessPic & SetupProcessPicRelations;
