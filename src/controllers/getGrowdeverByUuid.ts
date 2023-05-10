import { Request, Response } from "express"
import { selectGrowdeverByUuid } from "../db/growdevers";
import { GrowdeverRepository } from "../repository/growdever";

// export const getGrowdeverByUuidController = (req: Request, res: Response) => {
//   const uuidFilter = req.params.uuid;
//   const growdeverFound = selectGrowdeverByUuid(uuidFilter)
//   if (growdeverFound) {
//     return res.status(200).json(growdeverFound)
//   }
//   return res.status(404).json({ message: "Recurso não encontrado" })
// }


export const getGrowdeverByUuidController = async (req: Request, res: Response) => {
  const uuidFilter = req.params.uuid;
  const growdeverRepository = new GrowdeverRepository();
  const selectedGrowdever = await growdeverRepository.getGrowdever(uuidFilter);
  
  if (selectedGrowdever) {
    return res.status(200).json(selectedGrowdever)
  }
  return res.status(404).json({ message: "Recurso não encontrado" })
}