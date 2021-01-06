import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawUsedEquipment, WithdrawUsedEquipmentRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class WithdrawUsedEquipmentRepository extends DefaultCrudRepository<
  WithdrawUsedEquipment,
  typeof WithdrawUsedEquipment.prototype.id,
  WithdrawUsedEquipmentRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawUsedEquipment.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(WithdrawUsedEquipment, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
