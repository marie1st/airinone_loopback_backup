import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ProductNPrice, ProductNPriceRelations, Wage, ItemPrice, PremiumSetupCost} from '../models';
import {AirinoneDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {WageRepository} from './wage.repository';
import {ItemPriceRepository} from './item-price.repository';
import {PremiumSetupCostRepository} from './premium-setup-cost.repository';

export class ProductNPriceRepository extends DefaultCrudRepository<
  ProductNPrice,
  typeof ProductNPrice.prototype.id,
  ProductNPriceRelations
> {

  public readonly wageid: BelongsToAccessor<Wage, typeof ProductNPrice.prototype.id>;

  public readonly Itemprice: BelongsToAccessor<ItemPrice, typeof ProductNPrice.prototype.id>;

  public readonly PremiumSetup: BelongsToAccessor<PremiumSetupCost, typeof ProductNPrice.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('WageRepository') protected wageRepositoryGetter: Getter<WageRepository>, @repository.getter('ItemPriceRepository') protected itemPriceRepositoryGetter: Getter<ItemPriceRepository>, @repository.getter('PremiumSetupCostRepository') protected premiumSetupCostRepositoryGetter: Getter<PremiumSetupCostRepository>,
  ) {
    super(ProductNPrice, dataSource);
    this.PremiumSetup = this.createBelongsToAccessorFor('PremiumSetup', premiumSetupCostRepositoryGetter,);
    this.registerInclusionResolver('PremiumSetup', this.PremiumSetup.inclusionResolver);
    this.Itemprice = this.createBelongsToAccessorFor('Itemprice', itemPriceRepositoryGetter,);
    this.registerInclusionResolver('Itemprice', this.Itemprice.inclusionResolver);
    this.wageid = this.createBelongsToAccessorFor('wageid', wageRepositoryGetter,);
    this.registerInclusionResolver('wageid', this.wageid.inclusionResolver);
  }
}
