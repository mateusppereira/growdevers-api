import { NextFunction, Request, Response } from "express";

const ADMIN_SENHA = 'minha-senha-muito-forte';

export const isAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  next();
  // console.log('[is-admin-middleware] Validando request do admin')
  // if (req.body['admin-password'] === ADMIN_SENHA) {
  //   next();
  // }
  // return res.status(401).json({ message: 'Você não tem permissão' })
}
