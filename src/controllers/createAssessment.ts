import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express";
import { AssessmentEntity } from "../db/typeorm/assessment.entity";
import { pgHelper } from "../db/typeorm/pg-helper";

export const createAssessmentController = async (req: Request, res: Response) => {
  try {
    const assessmentRepository = pgHelper.client.getRepository(AssessmentEntity);
    const newAssessment = await assessmentRepository.save(
      new AssessmentEntity({
        uuid: uuidv4(),
        ...req.body,
      },
    ))
    if (newAssessment) {
      return res.json(newAssessment)
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }
}
