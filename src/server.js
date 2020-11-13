const express = require("express");
import {Users} from "./entity/Users";

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const app = express();
  app.use(express.json());

  app.post("/api/test", (req, res) => {
    createConnection().then(async connection => {
        let userRepository = await connection.manager.find(Users);
        res.send(resData);
        res.status(201).end();
    }).catch(error => console.log(error));
  });

  return app;
};

module.exports = { setupServer };