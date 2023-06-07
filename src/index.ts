import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { pgHelper } from './db/typeorm/pg-helper';
import { registerMiddlewares } from './middlewares';
import { registerRoutes } from './routes';
import Redis from 'ioredis';
import { redisHelper } from './db/redis';

dotenv.config();

const port = 8000;

const app: Express = express();
app.use(express.json())

app.get('/', async (_: Request, res: Response) => {
  return res.json({
    message: 'API ready for requests...',
  });
});

registerMiddlewares(app);

registerRoutes(app);

Promise.all([
  pgHelper.connect(),
  redisHelper.connect(),
]).then(() => app.listen(port, () => console.log(`API running at http://localhost:${port}`)))
  .catch((error) => console.log('Error while connection to DB', error));
