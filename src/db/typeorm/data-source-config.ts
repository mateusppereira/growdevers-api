import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AddressEntity } from './address.entity';
import { AssessmentEntity } from './assessment.entity';
import { GrowdeverEntity } from './growdever.entity';
import { GrowdeversAPITables1684368544621 } from './migrations/1684368544621-GrowdeversAPITables';
import { AddEmailToGrowdevers1684370687754 } from './migrations/1684370687754-AddEmailToGrowdevers';

const config: DataSourceOptions = {
  type: 'postgres',
  // connectionString
  url: process.env.DATABASE_URL,
  logging: process.env.DEBUG_ORM === 'true',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [GrowdeverEntity, AddressEntity, AssessmentEntity],
  migrations: ['db/migrations/*.js'],
  maxQueryExecutionTime: 10,
  // migrations: [
  //   GrowdeversAPITables1684368544621,
  //   AddEmailToGrowdevers1684370687754
  // ],
};

export const dataSource = new DataSource(config);
