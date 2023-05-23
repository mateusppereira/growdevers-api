import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import express, { Express, Request, Response } from 'express';
import { pgHelper } from './db/typeorm/pg-helper';
// import { registerMiddlewares } from './middlewares';
import { registerRoutes } from './routes';
import { GrowdeverEntity } from './db/typeorm/growdever.entity';
import { AddressEntity } from './db/typeorm/address.entity';

dotenv.config();

const port = 8000;

const app: Express = express();
app.use(express.json())

app.get('/', async (_: Request, res: Response) => {
  // const allGrowdevers = await GrowdeverEntity.find();
  const allGrowdevers = await pgHelper.client.getRepository(GrowdeverEntity).find();
  return res.json({
    message: 'API ready for requests...',
    growdevers: allGrowdevers,
  });
});

app.get('/address', async (_: Request, res: Response) => {
  // const growdever = await GrowdeverEntity.find({
  const growdever = await pgHelper.client.getRepository(GrowdeverEntity).find({
    // where: { uuid: '75a32658-0003-48cb-88ac-e68146c907bd' },
    relations: ['address'],
  })
  return res.json({
    growdever,
  });
});

// registerMiddlewares(app);

registerRoutes(app);

pgHelper.connect()
  .then(() => app.listen(port, () => console.log(`API running at http://localhost:${port}`)))
  .catch((error) => console.log('Error while connection to DB', error));
