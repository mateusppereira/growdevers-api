import { Request, Response } from "express";
import { selectGrowdeversByFilter } from "../db/growdevers";
import { GrowdeverRepository } from "../repository/growdever-pg";
import { GrowdeverTypeormRepository } from "../repository/growdever-typeorm";
import { CacheRedisRepository } from "../repository/cache-redis";

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

// export const getGrowdeversController = async (req: Request, res: Response) => {
//   const nameFilter = req.query.nome
//   if (typeof nameFilter !== 'string' && nameFilter !== undefined) {
//     return res.status(400).json({ message: 'Erro' });
//   }

//   const statusFilter = req.query.status
//   if (typeof statusFilter !== 'string' && statusFilter !== undefined) {
//     return res.status(400).json({ message: 'Erro' });
//   }

//   const growdeverRepository = new GrowdeverRepository();
//   const allGrowdevers = await growdeverRepository.getAllGrowdevers();
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

  // favorecendo busca no cache antes de ir no BD relacional
  // const cacheRepository = new CacheRedisRepository();
  // const allGrowdeversCached = await cacheRepository.get('get-growdevers')
  // if (allGrowdeversCached) return res.json(allGrowdeversCached);

  // busca no BD relacional
  const growdeverRepository = new GrowdeverTypeormRepository();
  const allGrowdevers = await growdeverRepository.getAllGrowdevers();
  
  // escrevendo valor do BD relacional no Cache (Redis)
  // await cacheRepository.set('get-growdevers', allGrowdevers);

  res.json(allGrowdevers)
}
