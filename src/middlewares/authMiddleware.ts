import { NextFunction, Request, Response } from "express"
import { selectGrowdeverByUsername } from "../db/growdevers";
import { UnauthorizedError } from "../exceptions/unauthorizedError";
import { ValidationError } from "../exceptions/validationError";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('[auth-middleware] Validando usuário e senha')
    const username = req.headers.username
    const password = req.headers.password
    if (!username || !password) throw new ValidationError('Usuário e/ou senha não enviados')

    const growdever = selectGrowdeverByUsername(username.toString())
    if (growdever?.getPassword() === password.toString()) {
      next()
    } else {
      throw new UnauthorizedError('Usuario e/ou senha incorretos')
    } 
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
    if (error instanceof UnauthorizedError) {
      return res.status(401).json({ message: error.message })
    }
    return res.status(500).json({ message: 'Um erro inesperado aconteceu' })
  }
}