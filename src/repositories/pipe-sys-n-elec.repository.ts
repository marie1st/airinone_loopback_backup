import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PipeSysNElec, PipeSysNElecRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class PipeSysNElecRepository extends DefaultCrudRepository<
  PipeSysNElec,
  typeof PipeSysNElec.prototype.id,
  PipeSysNElecRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof PipeSysNElec.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(PipeSysNElec, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
