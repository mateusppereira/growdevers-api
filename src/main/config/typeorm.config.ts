import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { GrowdeverEntity } from '../../app/shared/database/entites/growdever.entity';
import { GrowdeversAPITables1684368544621 } from '../../app/shared/database/migrations/1684368544621-GrowdeversAPITables';

export const config: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  // logging: process.env.DEBUG_ORM === 'true',
  ssl: { rejectUnauthorized: false },
  entities: [GrowdeverEntity],
  migrations: [GrowdeversAPITables1684368544621],
};

export const dataSource = new DataSource(config);