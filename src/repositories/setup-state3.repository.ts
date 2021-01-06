import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupState3, SetupState3Relations} from '../models';

export class SetupState3Repository extends DefaultCrudRepository<
  SetupState3,
  typeof SetupState3.prototype.id,
  SetupState3Relations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(SetupState3, dataSource);
  }
}
