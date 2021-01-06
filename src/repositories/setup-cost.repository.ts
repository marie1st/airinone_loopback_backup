import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCost, SetupCostRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class SetupCostRepository extends DefaultCrudRepository<
  SetupCost,
  typeof SetupCost.prototype.id,
  SetupCostRelations
> {

  public readonly orderProduct: BelongsToAccessor<OrderProduct, typeof SetupCost.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupCost, dataSource);
    this.orderProduct = this.createBelongsToAccessorFor('orderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('orderProduct', this.orderProduct.inclusionResolver);
  }
}
