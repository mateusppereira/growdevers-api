import { Express, Router } from 'express';
import { addSkillGrowdeverController } from './controllers/addSkillGrowdever';
import { createGrowdeverController } from './controllers/createGrowdever';
import { deleteGrowdeverController } from './controllers/deleteGrowdever';
import { deleteSkillGrowdeverController } from './controllers/deleteSkillGrowdever';
import { getGrowdeverByUuidController } from './controllers/getGrowdeverByUuid';
import { getGrowdeversController } from './controllers/getGrowdevers';
import { updateGrowdeverController } from './controllers/updateGrowdever';

export function registerRoutes(app: Express) {
  app.get('/growdevers', getGrowdeversController)
  
  app.get('/growdevers/:uuid', getGrowdeverByUuidController)
  
  // app.post('/growdevers', (req: Request, res: Response) => createGrowdever(req, res))
  app.post('/growdevers', createGrowdeverController)
  
  app.put('/growdever/:uuid/add-skills', addSkillGrowdeverController)
  
  app.put('/growdever/:uuid/remove-skills', deleteSkillGrowdeverController)
  
  app.put('/growdevers/:uuid', updateGrowdeverController)
  
  app.delete('/growdevers/:uuid', deleteGrowdeverController)

}
