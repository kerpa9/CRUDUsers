import { UsersService } from "./Services/users.services.js";

const userService = new UsersService();

export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUser(req.body);
    return res.status(201).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findOneUser(id);
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.findOneUser(id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }
    const updateUser = await userService.updateUser(user, req.body);
    return res.json(updateUser);
  } catch (err) {
    return res.status(500).json({
      status: `fail, ${err}`,
      message: "¡Something went very wrong",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.findOneUser(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with id: ${id} not found`,
      });
    }

    await userService.deleteUser(user);
    return res.status(204).json({});
  } catch (err) {
    return res.status(500).json({
      status: `fail, ${error} `,
      message: "¡Something went very wrong!",
    });
  }
};
