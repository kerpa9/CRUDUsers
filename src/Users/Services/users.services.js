import Users from "../model/users.model.js";

export class UsersService {
  async findAllUser(data) {
    return await Users.findAll({
      where: {
        status: true,
      },
    });
  }

  async createUser(data) {
    return await Users.create(data);
  }

  async findOneUser(id) {
    return await Users.findOne({
      where: {
        id,
        status: true,
      },
    });
  }

  async updateUser(user, data) {
    return await user.update(data);
  }

  async deleteUser(user) {
    return await user.update({
      status: false,
    });
  }
}
