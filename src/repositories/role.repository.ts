import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Role, RoleRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id,
  RoleRelations
> {

  public readonly employees: HasManyRepositoryFactory<Employee, typeof Role.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Role, dataSource);
    this.employees = this.createHasManyRepositoryFactoryFor('employees', employeeRepositoryGetter,);
    this.registerInclusionResolver('employees', this.employees.inclusionResolver);
  }
}
