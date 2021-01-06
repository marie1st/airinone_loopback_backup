import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Education, EducationRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';

export class EducationRepository extends DefaultCrudRepository<
  Education,
  typeof Education.prototype.id,
  EducationRelations
> {

  public readonly employee: HasOneRepositoryFactory<Employee, typeof Education.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Education, dataSource);
    this.employee = this.createHasOneRepositoryFactoryFor('employee', employeeRepositoryGetter);
    this.registerInclusionResolver('employee', this.employee.inclusionResolver);
  }
}
