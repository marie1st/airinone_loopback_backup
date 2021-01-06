import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupPipe, SetupPipeRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class SetupPipeRepository extends DefaultCrudRepository<
  SetupPipe,
  typeof SetupPipe.prototype.id,
  SetupPipeRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupPipe.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(SetupPipe, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
