import { NextFunction, Request, Response } from "express";
import express = require("express");
import { Routes } from "./routes";

const setupServer = () => {
  const app = express();
  app.use(express.json());

  // register express routes from defined application routes
  Routes.forEach((route) => {
    (app as any)[route.method](route.route,(req: Request, res: Response, next: NextFunction) => {
        const result = new (route.controller as any)()[route.action](req,res,next);
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined? res.send(result): undefined);
        } else if (result !== null && result !== undefined) {
          res.json(result);    
    }});
  });
  return app;
};

// module.exports = { setupServer };
export default setupServer;
