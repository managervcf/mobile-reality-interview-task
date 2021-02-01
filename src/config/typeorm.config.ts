import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

interface DbConfig {
  type: any;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  synchronize: any;
}

const dbConfig = config.get<DbConfig>('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
