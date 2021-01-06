import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {OrderProduct, OrderProductRelations, WithdrawUsedEquipment, WithdrawMechanicalEquipment, WithdrawMoney, EmployeeWorking, SetupProcessPic, SetupCost, SetupFrabicProtect, SetupFcu, SetupPipe, SetupCdu, PipeSysNElec, LeakTest, VacummTest, AddLiquid} from '../models';
import {WithdrawUsedEquipmentRepository} from './withdraw-used-equipment.repository';
import {WithdrawMechanicalEquipmentRepository} from './withdraw-mechanical-equipment.repository';
import {WithdrawMoneyRepository} from './withdraw-money.repository';
import {EmployeeWorkingRepository} from './employee-working.repository';
import {SetupProcessPicRepository} from './setup-process-pic.repository';
import {SetupCostRepository} from './setup-cost.repository';
import {SetupFrabicProtectRepository} from './setup-frabic-protect.repository';
import {SetupFcuRepository} from './setup-fcu.repository';
import {SetupPipeRepository} from './setup-pipe.repository';
import {SetupCduRepository} from './setup-cdu.repository';
import {PipeSysNElecRepository} from './pipe-sys-n-elec.repository';
import {LeakTestRepository} from './leak-test.repository';
import {VacummTestRepository} from './vacumm-test.repository';
import {AddLiquidRepository} from './add-liquid.repository';

export class OrderProductRepository extends DefaultCrudRepository<
  OrderProduct,
  typeof OrderProduct.prototype.order_id,
  OrderProductRelations
> {

  public readonly withdrawUsedEquipments: HasManyRepositoryFactory<WithdrawUsedEquipment, typeof OrderProduct.prototype.order_id>;

  public readonly withdrawMechanicalEquipments: HasManyRepositoryFactory<WithdrawMechanicalEquipment, typeof OrderProduct.prototype.order_id>;

  public readonly withdrawMoney: HasOneRepositoryFactory<WithdrawMoney, typeof OrderProduct.prototype.order_id>;

  public readonly employeeWorking: HasOneRepositoryFactory<EmployeeWorking, typeof OrderProduct.prototype.order_id>;

  public readonly setupProcessPic: HasOneRepositoryFactory<SetupProcessPic, typeof OrderProduct.prototype.order_id>;

  public readonly setupCost: HasOneRepositoryFactory<SetupCost, typeof OrderProduct.prototype.order_id>;

  public readonly setupFrabicProtect: HasOneRepositoryFactory<SetupFrabicProtect, typeof OrderProduct.prototype.order_id>;

  public readonly setupFcu: HasOneRepositoryFactory<SetupFcu, typeof OrderProduct.prototype.order_id>;

  public readonly setupPipe: HasOneRepositoryFactory<SetupPipe, typeof OrderProduct.prototype.order_id>;

  public readonly setupCdu: HasOneRepositoryFactory<SetupCdu, typeof OrderProduct.prototype.order_id>;

  public readonly pipeSysNElec: HasOneRepositoryFactory<PipeSysNElec, typeof OrderProduct.prototype.order_id>;

  public readonly leakTest: HasOneRepositoryFactory<LeakTest, typeof OrderProduct.prototype.order_id>;

  public readonly vacummTest: HasOneRepositoryFactory<VacummTest, typeof OrderProduct.prototype.order_id>;

  public readonly addLiquid: HasOneRepositoryFactory<AddLiquid, typeof OrderProduct.prototype.order_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('WithdrawUsedEquipmentRepository') protected withdrawUsedEquipmentRepositoryGetter: Getter<WithdrawUsedEquipmentRepository>, @repository.getter('WithdrawMechanicalEquipmentRepository') protected withdrawMechanicalEquipmentRepositoryGetter: Getter<WithdrawMechanicalEquipmentRepository>, @repository.getter('WithdrawMoneyRepository') protected withdrawMoneyRepositoryGetter: Getter<WithdrawMoneyRepository>, @repository.getter('EmployeeWorkingRepository') protected employeeWorkingRepositoryGetter: Getter<EmployeeWorkingRepository>, @repository.getter('SetupProcessPicRepository') protected setupProcessPicRepositoryGetter: Getter<SetupProcessPicRepository>, @repository.getter('SetupCostRepository') protected setupCostRepositoryGetter: Getter<SetupCostRepository>, @repository.getter('SetupFrabicProtectRepository') protected setupFrabicProtectRepositoryGetter: Getter<SetupFrabicProtectRepository>, @repository.getter('SetupFcuRepository') protected setupFcuRepositoryGetter: Getter<SetupFcuRepository>, @repository.getter('SetupPipeRepository') protected setupPipeRepositoryGetter: Getter<SetupPipeRepository>, @repository.getter('SetupCduRepository') protected setupCduRepositoryGetter: Getter<SetupCduRepository>, @repository.getter('PipeSysNElecRepository') protected pipeSysNElecRepositoryGetter: Getter<PipeSysNElecRepository>, @repository.getter('LeakTestRepository') protected leakTestRepositoryGetter: Getter<LeakTestRepository>, @repository.getter('VacummTestRepository') protected vacummTestRepositoryGetter: Getter<VacummTestRepository>, @repository.getter('AddLiquidRepository') protected addLiquidRepositoryGetter: Getter<AddLiquidRepository>,
  ) {
    super(OrderProduct, dataSource);
    this.addLiquid = this.createHasOneRepositoryFactoryFor('addLiquid', addLiquidRepositoryGetter);
    this.registerInclusionResolver('addLiquid', this.addLiquid.inclusionResolver);
    this.vacummTest = this.createHasOneRepositoryFactoryFor('vacummTest', vacummTestRepositoryGetter);
    this.registerInclusionResolver('vacummTest', this.vacummTest.inclusionResolver);
    this.leakTest = this.createHasOneRepositoryFactoryFor('leakTest', leakTestRepositoryGetter);
    this.registerInclusionResolver('leakTest', this.leakTest.inclusionResolver);
    this.pipeSysNElec = this.createHasOneRepositoryFactoryFor('pipeSysNElec', pipeSysNElecRepositoryGetter);
    this.registerInclusionResolver('pipeSysNElec', this.pipeSysNElec.inclusionResolver);
    this.setupCdu = this.createHasOneRepositoryFactoryFor('setupCdu', setupCduRepositoryGetter);
    this.registerInclusionResolver('setupCdu', this.setupCdu.inclusionResolver);
    this.setupPipe = this.createHasOneRepositoryFactoryFor('setupPipe', setupPipeRepositoryGetter);
    this.registerInclusionResolver('setupPipe', this.setupPipe.inclusionResolver);
    this.setupFcu = this.createHasOneRepositoryFactoryFor('setupFcu', setupFcuRepositoryGetter);
    this.registerInclusionResolver('setupFcu', this.setupFcu.inclusionResolver);
    this.setupFrabicProtect = this.createHasOneRepositoryFactoryFor('setupFrabicProtect', setupFrabicProtectRepositoryGetter);
    this.registerInclusionResolver('setupFrabicProtect', this.setupFrabicProtect.inclusionResolver);
    this.setupCost = this.createHasOneRepositoryFactoryFor('setupCost', setupCostRepositoryGetter);
    this.registerInclusionResolver('setupCost', this.setupCost.inclusionResolver);
    this.setupProcessPic = this.createHasOneRepositoryFactoryFor('setupProcessPic', setupProcessPicRepositoryGetter);
    this.registerInclusionResolver('setupProcessPic', this.setupProcessPic.inclusionResolver);
    this.employeeWorking = this.createHasOneRepositoryFactoryFor('employeeWorking', employeeWorkingRepositoryGetter);
    this.registerInclusionResolver('employeeWorking', this.employeeWorking.inclusionResolver);
    this.withdrawMoney = this.createHasOneRepositoryFactoryFor('withdrawMoney', withdrawMoneyRepositoryGetter);
    this.registerInclusionResolver('withdrawMoney', this.withdrawMoney.inclusionResolver);
    this.withdrawMechanicalEquipments = this.createHasManyRepositoryFactoryFor('withdrawMechanicalEquipments', withdrawMechanicalEquipmentRepositoryGetter,);
    this.registerInclusionResolver('withdrawMechanicalEquipments', this.withdrawMechanicalEquipments.inclusionResolver);
    this.withdrawUsedEquipments = this.createHasManyRepositoryFactoryFor('withdrawUsedEquipments', withdrawUsedEquipmentRepositoryGetter,);
    this.registerInclusionResolver('withdrawUsedEquipments', this.withdrawUsedEquipments.inclusionResolver);

  }
}
