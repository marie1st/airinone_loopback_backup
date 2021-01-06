import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AirinoneDataSource} from '../datasources';
import {SetupProcess, SetupProcessRelations, SetupProcessPic} from '../models';
import {SetupProcessPicRepository} from './setup-process-pic.repository';

export class SetupProcessRepository extends DefaultCrudRepository<
  SetupProcess,
  typeof SetupProcess.prototype.id,
  SetupProcessRelations
> {

  public readonly setupProcessPicsProcess: HasManyRepositoryFactory<SetupProcessPic, typeof SetupProcess.prototype.id>;

  constructor(
    @inject('datasources.airinone') dataSource: AirinoneDataSource, @repository.getter('SetupProcessPicRepository') protected setupProcessPicRepositoryGetter: Getter<SetupProcessPicRepository>,
  ) {
    super(SetupProcess, dataSource);
    this.setupProcessPicsProcess = this.createHasManyRepositoryFactoryFor('setupProcessPicsProcess', setupProcessPicRepositoryGetter,);
    this.registerInclusionResolver('setupProcessPicsProcess', this.setupProcessPicsProcess.inclusionResolver);
  }
}
