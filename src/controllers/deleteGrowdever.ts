import { Request, Response } from "express"
import { deleteByUuid } from "../db/growdevers";

export const deleteGrowdeverController = (req: Request, res: Response) => {
  const uuidToRemove = req.params.uuid;
  const removed = deleteByUuid(uuidToRemove);
  if (removed) {
    return res.status(200).json({})
  }
  return res.status(404).json({ message: "Recurso não encontrado" })
}
