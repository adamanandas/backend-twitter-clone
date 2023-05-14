import express from "express";
import { body } from "express-validator";

import * as UserController from "../controller/User";

const router: express.Router = express.Router();

router.post(
  "/login",
  [
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isLength({ min: 8 }),
  ],
  UserController.postLogin
);

router.post(
  "/signup",
  [
    body("firstName").trim().notEmpty().isLength({ min: 3, max: 25 }),
    body("lastName").trim().notEmpty().isLength({ min: 3, max: 25 }),
    body("username").trim().notEmpty().isLength({ min: 3 }),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isLength({ min: 8 }),
  ],
  UserController.postSignup
);

export { router };
