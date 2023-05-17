import { Request, Response } from "express";
import { selectGrowdeverByUuid, updateGrowdeverSkills } from "../db/growdevers";
import { ValidationError } from "../exceptions/validationError";
import { GrowdeverRepository } from "../repository/growdever-pg";
import { GrowdeverTypeormRepository } from "../repository/growdever-typeorm";


// export const addSkillGrowdeverController = (req: Request, res: Response) => {
//   try {
//     const uuid = req.params.uuid;
//     const user = selectGrowdeverByUuid(uuid);

//     const skill = req.body.skill;
//     if(!skill) {
//         throw new ValidationError('Skill not sent');
//     }
//     if(!user) {
//       throw new ValidationError('User not found');
//     }
//     user?.addSkills(skill);
    

//     const updatedGrowdever = updateGrowdeverSkills(user)
	
//     return res.status(200).json(updatedGrowdever)

//   } catch (error) {
//     if (error instanceof ValidationError) {
//       return res.status(400).json({ message: error.message })
//     }
  
//     return res.status(500).json({ message: 'Erro ao processar novo growdever' })
//   }
// }

// export const addSkillGrowdeverController = async (req: Request, res: Response) => {
//   try {
//     const growdeverRepository = new GrowdeverRepository();
//     const uuid = req.params.uuid;
//     let user = await growdeverRepository.getGrowdever(uuid);

//     const skill = req.body.skill;
//     if(!skill) {
//         throw new ValidationError('Skill not sent');
//     }
//     if(!user) {
//       throw new ValidationError('User not found');
//     }
//     const updateSkillGrowdever = await growdeverRepository.addSkills(uuid, [skill]);
//     if(!updateSkillGrowdever){
//       return res.status(404).json({message:'Growdever não encontrado.'})
//     }
//     user = await growdeverRepository.getGrowdever(uuid);
//     return res.status(200).json(user)

//   } catch (error) {
//     if (error instanceof ValidationError) {
//       return res.status(400).json({ message: error.message })
//     }
  
//     return res.status(500).json({ message: 'Erro ao processar novo growdever' })
//   }}


export const addSkillGrowdeverController = async (req: Request, res: Response) => {
  try {
    const growdeverRepository = new GrowdeverTypeormRepository();
    const uuid = req.params.uuid;
    let user = await growdeverRepository.getGrowdever(uuid);

    const skill = req.body.skill;
    if(!skill) {
        throw new ValidationError('Skill not sent');
    }
    if(!user) {
      throw new ValidationError('User not found');
    }
    const updateSkillGrowdever = await growdeverRepository.addSkills(uuid, [skill]);
    if(!updateSkillGrowdever){
      return res.status(404).json({message:'Growdever não encontrado.'})
    }
    user = await growdeverRepository.getGrowdever(uuid);
    return res.status(200).json(user)

  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
  
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }}