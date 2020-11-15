import { Factory, Seeder } from "typeorm-seeding";
import { Connection, getMongoManager } from "typeorm";
import Leftovers from "../entity/Leftovers";
const fs = require('fs');
import { plainToClass } from "class-transformer";


export default class CreateLeftovers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data = await fs.promises.readFile(__dirname + "/leftovers.json", "utf8");
    const seeds = JSON.parse(data);
    const leftovers = plainToClass(Leftovers, seeds);
    const manager = getMongoManager();
    await manager.save(leftovers);
  }
}
