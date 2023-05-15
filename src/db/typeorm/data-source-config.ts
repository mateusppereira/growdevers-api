import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  // connectionString
  url: process.env.DATABASE_URL,
  logging: process.env.DEBUG_ORM === 'true',
  maxQueryExecutionTime: 100,
  ssl: {
    rejectUnauthorized: false,
  },
};

export const dataSource = new DataSource(config);
