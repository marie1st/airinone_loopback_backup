import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMechanicalEquipment, WithdrawMechanicalEquipmentRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class WithdrawMechanicalEquipmentRepository extends DefaultCrudRepository<
  WithdrawMechanicalEquipment,
  typeof WithdrawMechanicalEquipment.prototype.id,
  WithdrawMechanicalEquipmentRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMechanicalEquipment.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(WithdrawMechanicalEquipment, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
