import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../exceptions/validationError";
import { Growdever } from "../models/growdever";

export const growdeverValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('[growdever-validator-middleware] Validating growdever', req.headers)
    const inputName = req.body.name
    const inputCpf = req.body.cpf
    const inputUsername = req.body.username
    const inputPassword = req.body.password
    const growdeverToCreate = new Growdever(inputName, inputCpf, inputUsername, inputPassword)
    req.body.growdeverToCreate = growdeverToCreate
    console.log('[growdever-validator-middleware] Growdever validated', growdeverToCreate)

    next()
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
  }
}
