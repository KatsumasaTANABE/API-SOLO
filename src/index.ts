import "reflect-metadata";
import DatabaseConnectionManager from "./dbserver";
import { Routes } from "./routes";
import setupServer from "./server";
import { getMongoManager } from "typeorm";
import Leftovers from "./entity/Leftovers";
import Genres from "./entity/Genres";
import { LeftoversController } from "./controller/LeftoversController";
import { Request, Response, NextFunction } from "express";

import express = require("express");

DatabaseConnectionManager.connect()
  .then(async (connection) => {
    const app = setupServer();

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test

/*    await connection.manager.save(
      connection.manager.create(Genres, {
        genre: "生活"
      })
    );

    await connection.manager.save(
      connection.manager.create(Leftovers, {
        titlename: "Timber",
        genre: "生活",
        useleftover: "test",
      })
    );
*/

/*
    const genres = new Genres();
    genres.genre = "生活";
    const manager1 = getMongoManager();
    await manager1.save(genres);

    const leftovers = new Leftovers();
    leftovers.titlename = "Timber";
    leftovers.genre = "生活";
    leftovers.useleftover = "test";
    const manager2 = getMongoManager();
    await manager2.save(leftovers);

*/

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/leftovers to see results"
    );
  })
  .catch((error) => console.log(error));
