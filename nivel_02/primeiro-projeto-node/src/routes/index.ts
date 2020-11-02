import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

/* transfere todas as rotas iniciadas com "appointmensts" para o "appointmentsRouter" */
routes.use('/appointmensts', appointmentsRouter);

/*
routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
}); */

export default routes;
