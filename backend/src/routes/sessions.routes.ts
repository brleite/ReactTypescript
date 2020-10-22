import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import UserVM from '../viewmodels/UserVM';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userVM = new UserVM(user);

  return response.json({ user: userVM, token });
});

export default sessionsRouter;
