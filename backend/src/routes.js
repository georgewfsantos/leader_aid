import { Router } from 'express';

import RequestController from './app/controllers/RequestController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/requests', RequestController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/requests', RequestController.index);
routes.get('/requests/:id', RequestController.show);
routes.put('/requests/:id/answer', RequestController.update);
routes.delete('/requests/:id/delete', RequestController.delete);

routes.put('/users/:user_id/update', UserController.update);
routes.post('/users/:user_id/delete', UserController.delete);

export default routes;
