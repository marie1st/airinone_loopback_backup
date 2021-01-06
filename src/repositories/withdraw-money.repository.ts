import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {WithdrawMoney, WithdrawMoneyRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class WithdrawMoneyRepository extends DefaultCrudRepository<
  WithdrawMoney,
  typeof WithdrawMoney.prototype.order_id,
  WithdrawMoneyRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMoney.prototype.order_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(WithdrawMoney, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
