import { Request, Response } from 'express';
import { ValidationError } from '../../shared/exceptions/validationError';
import { GrowdeverRepository } from './repository';
import { GetGrowdeversUseCase } from './usecases/getGrowdeversUseCase';
import { validateCreateGrowdever } from './validators/createGrowdever';
import { validateGetGrowdevers } from './validators/getGrowdevers';
import { CreateGrowdeverUseCase } from './usecases/createGrowdeverUseCase';

export const getGrowdeversController = async (req: Request, res: Response) => {
  try {
    const filter = validateGetGrowdevers(req.query);

    const growdeverRepository = new GrowdeverRepository();
    const usecase = new GetGrowdeversUseCase(growdeverRepository);
    const result = await usecase.execute(filter);

    return res.json(result)
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
  
    return res.status(500).json({ message: 'Erro ao buscar growdevers' })
  }
}

export const createGrowdeverController = async (req: Request, res: Response) => {
  try {
    const growdeverToCreate = validateCreateGrowdever(req.body);

    const growdeverRepository = new GrowdeverRepository();
    const usecase = new CreateGrowdeverUseCase(growdeverRepository);
    const result = await usecase.execute(growdeverToCreate);

    if (!result) return res.status(500).json({ message: 'Erro ao criar growdever' })

    return res.status(200).json(result)
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
  
    return res.status(500).json({ message: 'Erro ao criar growdever' })
  }
}