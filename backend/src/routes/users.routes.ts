import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserVM from '../viewmodels/UserVM';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const userVM = new UserVM(user);

    // delete user.password;

    return response.json(userVM);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
