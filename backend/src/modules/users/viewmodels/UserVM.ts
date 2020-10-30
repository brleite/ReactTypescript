import User from '../infra/typeorm/entities/User';

class UserVM {
  id: string;

  name: string;

  email: string;

  avatar: string;

  created_at: Date;

  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}

export default UserVM;
