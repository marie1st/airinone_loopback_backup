import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {ProductNPrice, ProductNPriceRelations, Wage, ItemPrice, PremiumSetupCost} from '../models';
import {WageRepository} from './wage.repository';
import {ItemPriceRepository} from './item-price.repository';
import {PremiumSetupCostRepository} from './premium-setup-cost.repository';

export class ProductNPriceRepository extends DefaultCrudRepository<
  ProductNPrice,
  typeof ProductNPrice.prototype.id,
  ProductNPriceRelations
> {

  public readonly Wage: BelongsToAccessor<Wage, typeof ProductNPrice.prototype.id>;

  public readonly ItemPrice: BelongsToAccessor<ItemPrice, typeof ProductNPrice.prototype.id>;

  public readonly PremiiumSetupCost: BelongsToAccessor<PremiumSetupCost, typeof ProductNPrice.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('WageRepository') protected wageRepositoryGetter: Getter<WageRepository>, @repository.getter('ItemPriceRepository') protected itemPriceRepositoryGetter: Getter<ItemPriceRepository>, @repository.getter('PremiumSetupCostRepository') protected premiumSetupCostRepositoryGetter: Getter<PremiumSetupCostRepository>,
  ) {
    super(ProductNPrice, dataSource);
    this.PremiiumSetupCost = this.createBelongsToAccessorFor('PremiiumSetupCost', premiumSetupCostRepositoryGetter,);
    this.registerInclusionResolver('PremiiumSetupCost', this.PremiiumSetupCost.inclusionResolver);
    this.ItemPrice = this.createBelongsToAccessorFor('ItemPrice', itemPriceRepositoryGetter,);
    this.registerInclusionResolver('ItemPrice', this.ItemPrice.inclusionResolver);
    this.Wage = this.createBelongsToAccessorFor('Wage', wageRepositoryGetter,);
    this.registerInclusionResolver('Wage', this.Wage.inclusionResolver);
  }
}
