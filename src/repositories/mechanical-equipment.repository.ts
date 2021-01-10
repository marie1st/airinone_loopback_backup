import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MechanicalEquipment, MechanicalEquipmentRelations, WithdrawMechanicalEquipment} from '../models';
import {AirinoneDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {WithdrawMechanicalEquipmentRepository} from './withdraw-mechanical-equipment.repository';

export class MechanicalEquipmentRepository extends DefaultCrudRepository<
  MechanicalEquipment,
  typeof MechanicalEquipment.prototype.id,
  MechanicalEquipmentRelations
> {

  public readonly withdrawMechanicalEquipments: HasManyRepositoryFactory<WithdrawMechanicalEquipment, typeof MechanicalEquipment.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('WithdrawMechanicalEquipmentRepository') protected withdrawMechanicalEquipmentRepositoryGetter: Getter<WithdrawMechanicalEquipmentRepository>,
  ) {
    super(MechanicalEquipment, dataSource);
    this.withdrawMechanicalEquipments = this.createHasManyRepositoryFactoryFor('withdrawMechanicalEquipments', withdrawMechanicalEquipmentRepositoryGetter,);
    this.registerInclusionResolver('withdrawMechanicalEquipments', this.withdrawMechanicalEquipments.inclusionResolver);
  }
}
