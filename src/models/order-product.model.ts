import {belongsTo, Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Customer} from './customer.model';
import {WithdrawUsedEquipment} from './withdraw-used-equipment.model';
import {WithdrawMechanicalEquipment} from './withdraw-mechanical-equipment.model';
import {WithdrawMoney} from './withdraw-money.model';
import {EmployeeWorking} from './employee-working.model';
import {SetupProcessPic} from './setup-process-pic.model';
import {SetupCost} from './setup-cost.model';
import {SetupFrabicProtect} from './setup-frabic-protect.model';
import {SetupFcu} from './setup-fcu.model';
import {SetupPipe} from './setup-pipe.model';
import {SetupCdu} from './setup-cdu.model';
import {PipeSysNElec} from './pipe-sys-n-elec.model';
import {LeakTest} from './leak-test.model';
import {VacummTest} from './vacumm-test.model';
import {AddLiquid} from './add-liquid.model';

@model()
export class OrderProduct extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  order_id: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  type_inverter: string;

  @property({
    type: 'number',
    required: true,
  })
  btu: number;

  @property({
    type: 'string',
    required: true,
  })
  type_cdu: string;

  @property({
    type: 'string',
    required: true,
  })
  type_fcu: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;
  @property({
    type: 'date',
    required: true,
  })
  appointment_date: string;

  @property({
    type: 'date',
    required: true,
  })
  time_period: string;

  @property({
    type: 'string',
    required: true,
  })
  type_of_work: string;

  @property({
    type: 'string',
    required: true,
  })
  amount: string;

  @property({
    type: 'string',
    required: true,
  })
  product: string;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @property({
    type: 'date',
  })
  created_at?: string;

  @belongsTo(() => Customer, {name: 'id'})
  order_by: string;

  @hasMany(() => WithdrawUsedEquipment, {keyTo: 'order_id'})
  withdrawUsedEquipments: WithdrawUsedEquipment[];

  @hasMany(() => WithdrawMechanicalEquipment, {keyTo: 'order_id'})
  withdrawMechanicalEquipments: WithdrawMechanicalEquipment[];

  @hasOne(() => WithdrawMoney, {keyTo: 'order_id'})
  withdrawMoney: WithdrawMoney;

  @hasOne(() => EmployeeWorking, {keyTo: 'order_id'})
  employeeWorking: EmployeeWorking;

  @hasOne(() => SetupProcessPic, {keyTo: 'order_id'})
  setupProcessPic: SetupProcessPic;

  @hasOne(() => SetupCost, {keyTo: 'order_id'})
  setupCost: SetupCost;

  @hasOne(() => SetupFrabicProtect, {keyTo: 'order_id'})
  setupFrabicProtect: SetupFrabicProtect;

  @hasOne(() => SetupFcu, {keyTo: 'order_id'})
  setupFcu: SetupFcu;

  @hasOne(() => SetupPipe, {keyTo: 'order_id'})
  setupPipe: SetupPipe;

  @hasOne(() => SetupCdu, {keyTo: 'order_id'})
  setupCdu: SetupCdu;

  @hasOne(() => PipeSysNElec, {keyTo: 'order_id'})
  pipeSysNElec: PipeSysNElec;

  @hasOne(() => LeakTest, {keyTo: 'order_id'})
  leakTest: LeakTest;

  @hasOne(() => VacummTest, {keyTo: 'order_id'})
  vacummTest: VacummTest;

  @hasOne(() => AddLiquid, {keyTo: 'order_id'})
  addLiquid: AddLiquid;

  constructor(data?: Partial<OrderProduct>) {
    super(data);
  }
}

export interface OrderProductRelations {
  // describe navigational properties here
}

export type OrderProductWithRelations = OrderProduct & OrderProductRelations;
