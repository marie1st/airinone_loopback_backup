import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Warehouse, WarehouseRelations} from '../models';

export class WarehouseRepository extends DefaultCrudRepository<
  Warehouse,
  typeof Warehouse.prototype.id,
  WarehouseRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(Warehouse, dataSource);
  }
}
