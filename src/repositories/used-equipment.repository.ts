import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {UsedEquipment, UsedEquipmentRelations} from '../models';

export class UsedEquipmentRepository extends DefaultCrudRepository<
  UsedEquipment,
  typeof UsedEquipment.prototype.id,
  UsedEquipmentRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(UsedEquipment, dataSource);
  }
}
