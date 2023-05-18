import { Pool } from 'pg';

const pool = new Pool({
  // connectionString: '',
  host: '',
  user: '',
  password: '',
  database: 'neondb',
  ssl: true
});

export const query = async () : Promise<any[]> => {
  const client = await pool.connect();
  const result = await client.query(
    'select * from clientes'
  );

  client.release();
  return result.rows;
}
