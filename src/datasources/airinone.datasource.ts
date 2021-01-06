import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mysql',
  url: 'mysql://root:p@ssw0rd4321@122.155.186.154:3309/airin1_dev_db',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AirinoneDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'airinone';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.airinone', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
