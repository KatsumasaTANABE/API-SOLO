import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import DatabaseConnectionManager from "../dbserver";
import Leftovers from "../entity/Leftovers";
import { createExpressServer } from "routing-controllers";
import setupServer from "../../src/server";

import express = require("express");

chai.use(chaiHttp);

const expect = chai.expect;

describe("expense manager", () => {
  let app: Application;
  let userRepo: Repository<Leftovers>;
  let testnumber;

  before(async () => {
    await DatabaseConnectionManager.connect();
    app = setupServer();
    userRepo = getRepository(Leftovers);
  });

  after(async () => {
    await userRepo.delete({ id: Not(IsNull()) });
  });

  beforeEach(async () => {
    let testData = new Leftovers();
    testData.titlename = "test";
    testData.genre = "金銭";
    testData.useleftover = "貯金";
    testData = await userRepo.save(testData);

    /**
     * Advanced Requirements:
     * - Create and use a dedicated test database
     */
  });

  describe("get test", () => {
    it("should be able to retrieve a leftovers", async () => {
      const res = await chai.request(app).get(`/leftovers`);
      testnumber = res.body[0].id;
      console.log(res.body[0].id);
      console.log(res.body);

      expect(res).to.have.status(200);
    });
  });

  describe("get test /leftovers/:id", () => {
    it("should be able to retrieve a leftovers", async () => {
      const testUrl = "/leftovers/" + testnumber;
      console.log(testUrl);
      const res = await chai.request(app).get(testUrl);
      console.log(res.body);

      expect(res).to.have.status(200);
    });
  });

  describe("post test /leftovers", () => {
    const testData ={name: "katsumasa", genre: "foods", useLeftover: "sample"};

    it("should be able to retrieve a leftovers", async () => {
      const res = await (await chai.request(app).post(`/leftovers`)
                  .send(testData));
      console.log(res.body);
      expect(res).to.have.status(200);
    });
  });


});