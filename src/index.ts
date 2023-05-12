import express from "express";

const app: express.Application = express();
const port: number = 3000;

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Hello, Wolrd!");
});

app.listen(port, (): void => {
  console.log(`This app running on port ${port}`);
});
