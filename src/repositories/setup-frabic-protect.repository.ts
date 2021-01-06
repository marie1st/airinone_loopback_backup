import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupFrabicProtect, SetupFrabicProtectRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class SetupFrabicProtectRepository extends DefaultCrudRepository<
  SetupFrabicProtect,
  typeof SetupFrabicProtect.prototype.id,
  SetupFrabicProtectRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupFrabicProtect.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupFrabicProtect, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
