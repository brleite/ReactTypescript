import CreateUserService from '@modules/users/services/CreateUserService';
// import UserVM from '@modules/users/viewmodels/UserVM';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    /* const createUser = new CreateUserService(usersRepository); */
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    /* const userVM = new UserVM(user);

    // delete user.password;

    return response.json(userVM); */
    return response.json(classToClass(user));
  }
}
