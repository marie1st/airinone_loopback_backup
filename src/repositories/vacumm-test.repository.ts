import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {VacummTest, VacummTestRelations, OrderProduct} from '../models';
import {OrderProductRepository} from './order-product.repository';

export class VacummTestRepository extends DefaultCrudRepository<
  VacummTest,
  typeof VacummTest.prototype.id,
  VacummTestRelations
> {

  public readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof VacummTest.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('OrderProductRepository') protected orderProductRepositoryGetter: Getter<OrderProductRepository>,
  ) {
    super(VacummTest, dataSource);
    this.OrderProduct = this.createBelongsToAccessorFor('OrderProduct', orderProductRepositoryGetter,);
    this.registerInclusionResolver('OrderProduct', this.OrderProduct.inclusionResolver);
  }
}
