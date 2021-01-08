import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {ItemPrice, ItemPriceRelations, ProductNPrice} from '../models';
import {ProductNPriceRepository} from './product-n-price.repository';

export class ItemPriceRepository extends DefaultCrudRepository<
  ItemPrice,
  typeof ItemPrice.prototype.id,
  ItemPriceRelations
> {

  public readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof ItemPrice.prototype.id>;

  public readonly productNPriceItemPrice: HasOneRepositoryFactory<ProductNPrice, typeof ItemPrice.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('ProductNPriceRepository') protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>,
  ) {
    super(ItemPrice, dataSource);
    this.productNPriceItemPrice = this.createHasOneRepositoryFactoryFor('productNPriceItemPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPriceItemPrice', this.productNPriceItemPrice.inclusionResolver);
    this.productNPrice = this.createHasOneRepositoryFactoryFor('productNPrice', productNPriceRepositoryGetter);
    this.registerInclusionResolver('productNPrice', this.productNPrice.inclusionResolver);
  }
}
