import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {LeakTest, LeakTestRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class LeakTestRepository extends DefaultCrudRepository<
  LeakTest,
  typeof LeakTest.prototype.id,
  LeakTestRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof LeakTest.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(LeakTest, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
