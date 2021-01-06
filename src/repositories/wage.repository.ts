import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Wage, WageRelations, ProductNPrice} from '../models';
import {ProductNPriceRepository} from './product-n-price.repository';

export class WageRepository extends DefaultCrudRepository<
  Wage,
  typeof Wage.prototype.id,
  WageRelations
> {

  public readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof Wage.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('ProductNPriceRepository') protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>,
  ) {
    super(Wage, dataSource);
    this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
  }
}
