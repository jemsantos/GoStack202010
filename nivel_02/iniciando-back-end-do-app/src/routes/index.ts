import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointmensts', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
