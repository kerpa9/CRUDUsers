import { Router } from "express";

import {
  createUser,
  deleteUser,
  findAllUsers,
  getOneUser,
  updateUser,
} from "../users.controller.js";

export const router = Router();

router.route("/").get(findAllUsers).post(createUser);
router.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);
