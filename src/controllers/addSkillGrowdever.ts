import { Request, Response } from "express";
import { selectGrowdeverByUuid, updateGrowdeverSkills } from "../db/growdevers";
import { ValidationError } from "../exceptions/validationError";


export const addSkillGrowdeverController = (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    const user = selectGrowdeverByUuid(uuid);

    const skill = req.body.skill;
    if(!skill) {
        throw new ValidationError('Skill not sent');
    }
    if(!user) {
      throw new ValidationError('User not found');
    }
    user?.addSkills(skill);
    

    const updatedGrowdever = updateGrowdeverSkills(user)
	
    return res.status(200).json(updatedGrowdever)

  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message })
    }
  
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }
}
