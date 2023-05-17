import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

import sequelize from "../utils/database";
import * as userRoutes from "../src/apps/user/routes/userRoutes";

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.body);
});

app.use("/user", userRoutes.router);

sequelize
  .sync()
  .then((result: Object): void => {
    app.listen(port, (): void => {
      console.log(`This app running on port ${port}`);
    });
  })
  .catch((error: Object): void => {
    console.log(error);
  });
