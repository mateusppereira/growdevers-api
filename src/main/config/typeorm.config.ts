import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { AddressEntity } from '../../db/typeorm/address.entity';
import { AssessmentEntity } from '../../db/typeorm/assessment.entity';
import { GrowdeverEntity } from '../../db/typeorm/growdever.entity';

export const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: process.env.DEBUG_ORM === 'true',
  ssl: { rejectUnauthorized: false },
  entities: [GrowdeverEntity, AddressEntity, AssessmentEntity],
  migrations: ['db/migrations/*.js'],
};
