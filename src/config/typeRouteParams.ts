import express from "express";

export type RouteParams = {
  req: express.Request;
  res: express.Response;
  next: express.NextFunction;
};
