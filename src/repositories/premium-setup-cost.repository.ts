import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PremiumSetupCost, PremiumSetupCostRelations, ProductNPrice} from '../models';
import {ProductNPriceRepository} from './product-n-price.repository';

export class PremiumSetupCostRepository extends DefaultCrudRepository<
  PremiumSetupCost,
  typeof PremiumSetupCost.prototype.id,
  PremiumSetupCostRelations
> {

  public readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof PremiumSetupCost.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('ProductNPriceRepository') protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>,
  ) {
    super(PremiumSetupCost, dataSource);
    this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
  }
}
