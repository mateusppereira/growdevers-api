import { Router } from 'express';

const growdeverRoutes = Router();

growdeverRoutes.get('/', (req, res) => res.send({}))

growdeverRoutes.get('/:uuid',  (req, res) => res.send({}))

growdeverRoutes.post('/',  (req, res) => res.send({}))

growdeverRoutes.put('/:uuid/add-skills',  (req, res) => res.send({}))

growdeverRoutes.put('/:uuid/remove-skills',  (req, res) => res.send({}))

growdeverRoutes.put('/:uuid',  (req, res) => res.send({}))

growdeverRoutes.delete('/:uuid', (req, res) => res.send({}))

export { growdeverRoutes };
