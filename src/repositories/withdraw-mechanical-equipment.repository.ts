import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMechanicalEquipment, WithdrawMechanicalEquipmentRelations, OrderProduct, MechanicalEquipment} from '../models';
import {OrderProductRepository} from './order-product.repository';
import {MechanicalEquipmentRepository} from './mechanical-equipment.repository';

export class WithdrawMechanicalEquipmentRepository extends DefaultCrudRepository<
  WithdrawMechanicalEquipment,
  typeof WithdrawMechanicalEquipment.prototype.id,
  WithdrawMechanicalEquipmentRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMechanicalEquipment.prototype.id>;

  public readonly mechanicalwithdraw: BelongsToAccessor<MechanicalEquipment, typeof WithdrawMechanicalEquipment.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>, @repository.getter('MechanicalEquipmentRepository') protected mechanicalEquipmentRepositoryGetter: Getter<MechanicalEquipmentRepository>,
  ) {
    super(WithdrawMechanicalEquipment, dataSource);
    this.mechanicalwithdraw = this.createBelongsToAccessorFor('mechanicalwithdraw', mechanicalEquipmentRepositoryGetter,);
    this.registerInclusionResolver('mechanicalwithdraw', this.mechanicalwithdraw.inclusionResolver);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
