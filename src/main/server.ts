import { createServer } from './config/express.config';

export const runServer = () => {
  const port = 8008;
  const app = createServer();

  app.listen(
    port,
    () => console.log(`API running at http://localhost:${port}`),
  )
}