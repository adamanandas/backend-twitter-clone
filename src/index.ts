import express from "express";
import bodyParser from "body-parser";

import sequelize from "../utils/database";
import { RouteParams } from "./config/typeRouteParams";
import * as userRoutes from "../src/apps/user/routes/userRoutes";

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use((params: RouteParams) => {
  params.res.setHeader("Access-Control-Allow-Origin", "*");
  params.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  params.res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  params.next();
});

app.get("/", (params: RouteParams): void => {
  params.res.send("Hello, Wolrd!");
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
