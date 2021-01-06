import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PromotionalProductsGiveaway, PromotionalProductsGiveawayRelations} from '../models';

export class PromotionalProductsGiveawayRepository extends DefaultCrudRepository<
  PromotionalProductsGiveaway,
  typeof PromotionalProductsGiveaway.prototype.id,
  PromotionalProductsGiveawayRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PromotionalProductsGiveaway, dataSource);
  }
}
