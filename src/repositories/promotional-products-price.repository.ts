import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {PromotionalProductsPrice, PromotionalProductsPriceRelations} from '../models';

export class PromotionalProductsPriceRepository extends DefaultCrudRepository<
  PromotionalProductsPrice,
  typeof PromotionalProductsPrice.prototype.id,
  PromotionalProductsPriceRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(PromotionalProductsPrice, dataSource);
  }
}
