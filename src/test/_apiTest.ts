import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import DatabaseConnectionManager from "../dbserver";
import Users from "../entity/Users";
import { createExpressServer } from "routing-controllers";
import setupServer from "../../src/server";

import express = require("express");

chai.use(chaiHttp);

const expect = chai.expect;

describe("expense manager", () => {
  let app: Application;
  let userRepo: Repository<Users>;
  let testnumber;

  before(async () => {
    await DatabaseConnectionManager.connect();
    app = setupServer();
    userRepo = getRepository(Users);
  });

  after(async () => {
    await userRepo.delete({ id: Not(IsNull()) });
  });

  beforeEach(async () => {
    let testUser = new Users();
    testUser.firstName = "test";
    testUser.lastName = "user";
    testUser.age = 30;
    testUser = await userRepo.save(testUser);

    /**
     * Advanced Requirements:
     * - Create and use a dedicated test database
     */
  });

  describe("get test", () => {
    it("should be able to retrieve a user", async () => {
      const res = await chai.request(app).get(`/users`);
      testnumber = res.body[0].id;
      console.log(res.body[0].id);
      console.log(res.body);

      expect(res).to.have.status(200);
    });
  });

  describe("get test /user/:id", () => {
    it("should be able to retrieve a user", async () => {
      const testUrl = "/users/" + testnumber;
      console.log(testUrl);
      const res = await chai.request(app).get(testUrl);
      console.log(res.body);

      expect(res).to.have.status(200);
    });
  });

  describe("post test /user", () => {
    const testuser ={firstName: "katsumasa", lastName: "posttest", age: "99"};

    it("should be able to retrieve a user", async () => {
      const res = await (await chai.request(app).post(`/users`)
                  .send(testuser));
      console.log(res.body);

      expect(res).to.have.status(200);
    });
  });


});