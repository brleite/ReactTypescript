import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
// import UserVM from '@modules/users/viewmodels/UserVM';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    /* const usersRepository = new UsersRepository(); */

    /* const updateUserAvatar = new UpdateUserAvatarService(usersRepository); */
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    // return response.json(new UserVM(user));
    return response.json(classToClass(user));
  }
}
