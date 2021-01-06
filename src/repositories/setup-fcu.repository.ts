import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupFcu, SetupFcuRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class SetupFcuRepository extends DefaultCrudRepository<
  SetupFcu,
  typeof SetupFcu.prototype.id,
  SetupFcuRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupFcu.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupFcu, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
