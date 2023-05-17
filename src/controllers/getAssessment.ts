import { Request, Response } from "express";
import { pgHelper } from "../db/typeorm/pg-helper";
import { AssessmentEntity } from "../db/typeorm/assessment.entity";

export const getAssessmentController = async (req: Request, res: Response) => {
  try {
    console.log('received request', req.params)
    const uuid = req.params.id;
    const assessmentRepository = pgHelper.client.getRepository(AssessmentEntity);
    const assessment = await assessmentRepository.findOne({
      where: { uuid },
      // relations: ['growdever']
    })
    console.log('assesment found', assessment)
    if (assessment) return res.json(assessment);
    return res.status(404).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro ao processar novo growdever' })
  }
}
