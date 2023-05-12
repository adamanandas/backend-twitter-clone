import express from "express";

import sequelize from "../utils/database";

const app: express.Application = express();
const port: number = 3000;

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Hello, Wolrd!");
});

sequelize
  .sync()
  .then((result): void => {
    app.listen(port, (): void => {
      console.log(`This app running on port ${port}`);
    });
  })
  .catch((error): void => {
    console.log(error);
  });
