import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PromotionalProductsPercent, PromotionalProductsPercentRelations} from '../models';

export class PromotionalProductsPercentRepository extends DefaultCrudRepository<
  PromotionalProductsPercent,
  typeof PromotionalProductsPercent.prototype.id,
  PromotionalProductsPercentRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PromotionalProductsPercent, dataSource);
  }
}
