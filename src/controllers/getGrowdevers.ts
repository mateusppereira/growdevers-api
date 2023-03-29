import { Request, Response } from "express";
import { selectGrowdeversByFilter } from "../db/growdevers";

export const getGrowdeversController = (req: Request, res: Response) => {
  const nameFilter = req.query.nome
  if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
    return res.status(400).json({ message: 'Erro' });
  }

  const statusFilter = req.query.status
  if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
    return res.status(400).json({ message: 'Erro' });
  }

  const allGrowdevers = selectGrowdeversByFilter(nameFilter, statusFilter);
  res.json(allGrowdevers)
}
