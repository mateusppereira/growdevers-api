import { Request, Response } from "express";
import { selectGrowdeversByFilter } from "../db/growdevers";
import { GrowdeverRepository } from "../repository/growdever";

// export const getGrowdeversController = (req: Request, res: Response) => {
//   const nameFilter = req.query.nome
//   if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
//     return res.status(400).json({ message: 'Erro' });
//   }

//   const statusFilter = req.query.status
//   if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
//     return res.status(400).json({ message: 'Erro' });
//   }

//   const allGrowdevers = selectGrowdeversByFilter(nameFilter, statusFilter);
//   res.json(allGrowdevers)
// }

export const getGrowdeversController = async (req: Request, res: Response) => {
  const nameFilter = req.query.nome
  if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
    return res.status(400).json({ message: 'Erro' });
  }

  const statusFilter = req.query.status
  if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
    return res.status(400).json({ message: 'Erro' });
  }

  const growdeverRepository = new GrowdeverRepository();
  const allGrowdevers = await growdeverRepository.getAllGrowdevers();
  res.json(allGrowdevers)
}
