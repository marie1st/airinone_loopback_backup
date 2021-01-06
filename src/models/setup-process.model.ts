import {Entity, model, property, hasMany} from '@loopback/repository';
import {SetupProcessPic} from './setup-process-pic.model';

@model()
export class SetupProcess extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => SetupProcessPic, {keyTo: 'id'})
  setupProcessPics: SetupProcessPic[];

  @hasMany(() => SetupProcessPic, {keyTo: 'setup_process_id'})
  setupProcessPicsProcess: SetupProcessPic[];

  constructor(data?: Partial<SetupProcess>) {
    super(data);
  }
}

export interface SetupProcessRelations {
  // describe navigational properties here
}

export type SetupProcessWithRelations = SetupProcess & SetupProcessRelations;
