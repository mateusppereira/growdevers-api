import express, { Express, } from 'express';
import { registerMiddlewares } from './httpMiddlewares.config';
import { registerRoutes } from './httpRoutes.config';

export const createServer = () => {
  const app: Express = express();

  app.use(express.json());

  registerMiddlewares(app);
  registerRoutes(app);

  return app;
}
