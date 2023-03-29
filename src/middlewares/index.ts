import { Express, NextFunction, Request, Response } from 'express';
import { growdeverValidatorMiddleware } from './growdeverValidatorMiddleware';
import { isAdminMiddleware } from './isAdminMiddleware';
import { authMiddleware } from './authMiddleware';

function logMiddleware (req: Request, _: Response, next: NextFunction) {
  console.log('[log-middleware] ---------- ')
  console.log('[log-middleware] Received req ', req.method, req.url)
  console.log('[log-middleware] Request body: ', req.body)
  console.log('[log-middleware] Request params: ', req.params)
  console.log('[log-middleware] Request query: ', req.query)
  console.log('[log-middleware] Request headers: ', req.headers)
  next();
}

export const registerMiddlewares = (app: Express) => {
  app.use(logMiddleware);
  
  app.post(
    '/growdevers',
    [isAdminMiddleware, growdeverValidatorMiddleware],
  );

  app.get('*', authMiddleware)
  app.put('*', authMiddleware)
  app.delete('*', authMiddleware)
}