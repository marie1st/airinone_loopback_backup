import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {AddLiquid, AddLiquidRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class AddLiquidRepository extends DefaultCrudRepository<
  AddLiquid,
  typeof AddLiquid.prototype.id,
  AddLiquidRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof AddLiquid.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(AddLiquid, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
