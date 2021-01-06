import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Customer, CustomerRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {

  public readonly orderProducts: HasManyRepositoryFactory<OrderProduct, typeof Customer.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(Customer, dataSource);
    this.orderProducts = this.createHasManyRepositoryFactoryFor('orderProducts', orderProductRepositoryGetter,);
    this.registerInclusionResolver('orderProducts', this.orderProducts.inclusionResolver);
  }
}
