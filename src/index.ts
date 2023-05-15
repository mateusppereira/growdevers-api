import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { pgHelper } from './db/typeorm/pg-helper';
import { registerMiddlewares } from './middlewares';
import { registerRoutes } from './routes';

dotenv.config();

const port = process.env.PORT;

const app: Express = express();
app.use(express.json())

app.get('/', async (_: Request, res: Response) => {
  res.json({ message: 'API ready for requests...' });
});

registerMiddlewares(app);

registerRoutes(app);

pgHelper.connect()
  .then(() => app.listen(port, () => console.log(`API running at http://localhost:${port}`)))
  .catch((error) => console.log('Error while connection to DB', error));
