import { Router } from 'express';

const assessmentRoutes = Router();

assessmentRoutes.post('/', (req, res) => res.send({ }));

assessmentRoutes.get('/:id', (req, res) => res.send({ }));

export { assessmentRoutes }