import "reflect-metadata";
import DatabaseConnectionManager from "./dbserver";
import { Routes } from "./routes";
import setupServer from "./server";
import Users from "./entity/Users";
import { UserController } from "./controller/UserController";
import { Request, Response, NextFunction } from "express";

import express = require("express");

DatabaseConnectionManager.connect()
  .then(async (connection) => {
    const app = setupServer();

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
/*
    // insert new users for test
    await connection.manager.save(
      connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27,
      })
    );
    await connection.manager.save(
      connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24,
      })
    );
*/
    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
