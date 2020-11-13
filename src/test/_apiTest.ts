/**
 * Disclaimer
 *
 * You will notice these test cases are verbose,
 * and can sometimes be refactored and broken down
 * to smaller functions. However, for the sake of
 * learning, and given the complexity of this sprint,
 * test cases here will be as verbose as possible to
 * give you a clear trail of what these tests are trying
 * to achieve
 */
import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import {Routes} from "./routes";
import {Users} from "./entity/Users";

//chai.use(chaiHttp);

const expect = chai.expect;

describe("expense manager", () => {
//  const APP_SECRET = "xxxyyyxxxyyy";
  const TEST_USER_ID = "3461cac2-35bd-4d45-a163-f220beb43d76";
//  const TEST_ACCOUNT_ID = "655f6179-543f-45e7-a4ae-69bd9f179c52";

});