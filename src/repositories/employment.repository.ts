import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Employee, Employment, EmploymentRelations} from '../models';
import {EmployeeRepository} from './employee.repository';

export class EmploymentRepository extends DefaultCrudRepository<
  Employment,
  typeof Employment.prototype.id,
  EmploymentRelations
> {

  public readonly employees: HasManyRepositoryFactory<Employee, typeof Employment.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Employment, dataSource);
    this.employees = this.createHasManyRepositoryFactoryFor('employees', employeeRepositoryGetter,);
    this.registerInclusionResolver('employees', this.employees.inclusionResolver);
  }
}
