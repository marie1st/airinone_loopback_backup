import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {ProblemReport, ProblemReportRelations} from '../models';

export class ProblemReportRepository extends DefaultCrudRepository<
  ProblemReport,
  typeof ProblemReport.prototype.id,
  ProblemReportRelations
> {
  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource,
  ) {
    super(ProblemReport, dataSource);
  }
}
