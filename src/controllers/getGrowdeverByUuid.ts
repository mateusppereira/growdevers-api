import { Request, Response } from "express"
import { selectGrowdeverByUuid } from "../db/growdevers";

export const getGrowdeverByUuidController = (req: Request, res: Response) => {
  const uuidFilter = req.params.uuid;
  const growdeverFound = selectGrowdeverByUuid(uuidFilter)
  if (growdeverFound) {
    return res.status(200).json(growdeverFound)
  }
  return res.status(404).json({ message: "Recurso não encontrado" })
}
