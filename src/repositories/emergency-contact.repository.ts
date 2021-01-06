import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {EmergencyContact, EmergencyContactRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';

export class EmergencyContactRepository extends DefaultCrudRepository<
  EmergencyContact,
  typeof EmergencyContact.prototype.employee_id,
  EmergencyContactRelations
> {

  public readonly Employee: BelongsToAccessor<Employee, typeof EmergencyContact.prototype.employee_id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(EmergencyContact, dataSource);
    this.Employee = this.createBelongsToAccessorFor('Employee', employeeRepositoryGetter,);
    this.registerInclusionResolver('Employee', this.Employee.inclusionResolver);
  }
}
