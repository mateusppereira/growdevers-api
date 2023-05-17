import { Express, Router } from 'express';
import { addSkillGrowdeverController } from './controllers/addSkillGrowdever';
import { createGrowdeverController } from './controllers/createGrowdever';
import { deleteGrowdeverController } from './controllers/deleteGrowdever';
import { deleteSkillGrowdeverController } from './controllers/deleteSkillGrowdever';
import { getGrowdeverByUuidController } from './controllers/getGrowdeverByUuid';
import { getGrowdeversController } from './controllers/getGrowdevers';
import { updateGrowdeverController } from './controllers/updateGrowdever';
import { createClienteController } from './controllers/createCliente';
import { getClientesController } from './controllers/getClientes';
import { createAssessmentController } from './controllers/createAssessment';
import { getAssessmentController } from './controllers/getAssessment';

export function registerRoutes(app: Express) {
  app.get('/growdevers', getGrowdeversController)
  
  app.get('/growdevers/:uuid', getGrowdeverByUuidController)
  
  // app.post('/growdevers', (req: Request, res: Response) => createGrowdever(req, res))
  app.post('/growdevers', createGrowdeverController)
  
  app.put('/growdever/:uuid/add-skills', addSkillGrowdeverController)
  
  app.put('/growdever/:uuid/remove-skills', deleteSkillGrowdeverController)
  
  app.put('/growdevers/:uuid', updateGrowdeverController)
  
  app.delete('/growdevers/:uuid', deleteGrowdeverController)

  
  app.post('/clientes', createClienteController);
  
  app.get('/clientes/:id', getClientesController);

  // assessments
  app.post('/assessments', createAssessmentController);

  app.get('/assessments/:id', getAssessmentController);
}
