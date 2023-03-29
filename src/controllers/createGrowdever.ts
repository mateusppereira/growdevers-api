import { Request, Response } from "express";
import { insertGrowdever } from "../db/growdevers";
import { Growdever } from "../models/growdever";

export const createGrowdeverController = (req: Request, res: Response) => {
  try {
    const newGrowdever = req.body.growdeverToCreate
    const insertedUuid = insertGrowdever(newGrowdever)
    if (insertedUuid) {
      return res.json(newGrowdever)
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }
}
