import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {Department, DepartmentRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';

export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.id,
  DepartmentRelations
> {

  public readonly employees: HasManyRepositoryFactory<Employee, typeof Department.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(Department, dataSource);
    this.employees = this.createHasManyRepositoryFactoryFor('employees', employeeRepositoryGetter,);
    this.registerInclusionResolver('employees', this.employees.inclusionResolver);
  }
}
