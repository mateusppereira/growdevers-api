import { Request, Response } from "express";
import { insertGrowdever } from "../db/growdevers";
import { Growdever } from "../models/growdever";
import { GrowdeverRepository } from "../repository/growdever";

// export const createGrowdeverController = (req: Request, res: Response) => {
//   try {
//     const newGrowdever = req.body.growdeverToCreate
//     const insertedUuid = insertGrowdever(newGrowdever)
//     if (insertedUuid) {
//       return res.json(newGrowdever)
//     }
//   } catch (error) {
//     return res.status(500).json({ message: 'Erro ao processar novo growdever' })
//   }
// }

export const createGrowdeverController = async (req: Request, res: Response) => {
  try {
    console.log('[create-growdever-controller] Receive request in controller')
    const newGrowdever = req.body.growdeverToCreate
    const growdeverRepository = new GrowdeverRepository();
    const insertedUuid = await growdeverRepository.createGrowdever(newGrowdever)
    if (insertedUuid) {
      return res.json(newGrowdever)
    }
  } catch (error) {
    console.log('[create-growdever-controller] Error', error);
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }
}
