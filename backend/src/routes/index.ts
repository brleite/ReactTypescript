import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Tudo que vem depois de appointments será repassado para appointmentsRouter
routes.use('/appointments', appointmentsRouter);

/* routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };
  return response.json(user);
}); */

export default routes;
