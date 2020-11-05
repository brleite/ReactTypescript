import { container } from 'tsyringe';
import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    /* const usersRepository = new UsersRepository(); */

    const { email } = request.body;

    /* const authenticateUser = new AuthenticateUserService(usersRepository); */
    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
