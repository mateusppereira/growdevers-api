import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AddressEntity } from './address.entity';
import { GrowdeverEntity } from './growdever.entity';
import { AssessmentEntity } from './assessment.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  // connectionString
  url: process.env.DATABASE_URL,
  logging: process.env.DEBUG_ORM === 'true',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [GrowdeverEntity, AddressEntity, AssessmentEntity]
};

export const dataSource = new DataSource(config);
