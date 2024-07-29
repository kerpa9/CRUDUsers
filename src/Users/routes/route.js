import { Router } from "express";

import { router as userRouter } from "./usersRoutes.js";

export const router = Router();

router.use("/users", userRouter);
