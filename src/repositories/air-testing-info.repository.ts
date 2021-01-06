import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {AirTestingInfo, AirTestingInfoRelations} from '../models';

export class AirTestingInfoRepository extends DefaultCrudRepository<
  AirTestingInfo,
  typeof AirTestingInfo.prototype.id,
  AirTestingInfoRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(AirTestingInfo, dataSource);
  }
}
