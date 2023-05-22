import { Express } from 'express';
import { assessmentRoutes } from '../../app/features/assessments/routes';
import { growdeverRoutes } from '../../app/features/growdevers/routes';

export function registerRoutes(app: Express) {
  app.use('/growdevers', growdeverRoutes);
  app.use('/assessments', assessmentRoutes);
}
