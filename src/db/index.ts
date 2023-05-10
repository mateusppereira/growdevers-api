import { Pool } from 'pg';

const pool = new Pool({
  ssl: true,
  // connectionString: 'postgres://mateusppereira:TjtC42lDzQqp@ep-mute-haze-328124.us-east-2.aws.neon.tech/neondb',
  host: 'ep-mute-haze-328124.us-east-2.aws.neon.tech',
  password: 'TjtC42lDzQqp',
  user: 'mateusppereira',
  database: 'neondb'
});

export const query = async (sql: string, params: any[]) : Promise<any> => {
  const client = await pool.connect();
  const result = await client.query(sql, params);

  console.log('result', result);

  client.release();
  return result;
}
