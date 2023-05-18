import { Pool } from 'pg';

const pool = new Pool({
  ssl: true,
  // connectionString: '',
  host: '',
  password: '',
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
