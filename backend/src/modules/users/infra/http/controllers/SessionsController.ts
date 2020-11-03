import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UserVM from '@modules/users/viewmodels/UserVM';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    /* const usersRepository = new UsersRepository(); */

    const { email, password } = request.body;

    /* const authenticateUser = new AuthenticateUserService(usersRepository); */
    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const userVM = new UserVM(user);

    return response.json({ user: userVM, token });
  }
}
