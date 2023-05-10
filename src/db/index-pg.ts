import { Pool } from 'pg';

const pool = new Pool({
  // connectionString: 'postgres://mateusppereira:TjtC42lDzQqp@ep-mute-haze-328124.us-east-2.aws.neon.tech/neondb',
  host: 'ep-mute-haze-328124.us-east-2.aws.neon.tech',
  user: 'mateusppereira',
  password: 'TjtC42lDzQqp',
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
