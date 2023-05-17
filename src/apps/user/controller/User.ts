import { Request, Response, NextFunction } from "express";
import * as userServices from "../services/createUser";

const postLogin = (req: Request, res: Response, next: NextFunction) => {};
const postSignup = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
};

export { postLogin, postSignup };
