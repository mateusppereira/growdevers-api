import { Router } from 'express';
import { createGrowdeverController, getGrowdeversController } from './controller';

const growdeverRoutes = Router();

growdeverRoutes.get('/', (req, res) => getGrowdeversController(req, res))

growdeverRoutes.get('/:uuid',  (req, res) => res.send({}))

growdeverRoutes.post('/',  (req, res) => createGrowdeverController(req, res))

growdeverRoutes.put('/:uuid/add-skills',  (req, res) => res.send({}))

growdeverRoutes.put('/:uuid/remove-skills',  (req, res) => res.send({}))

growdeverRoutes.put('/:uuid',  (req, res) => res.send({}))

growdeverRoutes.delete('/:uuid', (req, res) => res.send({}))

export { growdeverRoutes };
