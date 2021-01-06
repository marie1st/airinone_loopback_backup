import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupCdu, SetupCduRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class SetupCduRepository extends DefaultCrudRepository<
  SetupCdu,
  typeof SetupCdu.prototype.id,
  SetupCduRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupCdu.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupCdu, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
