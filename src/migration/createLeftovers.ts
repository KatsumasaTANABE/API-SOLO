import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLeftovers implements MigrationInterface {
  name = "CreateLeftovers";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "lLeftovers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(100) NOT NULL, "passwordHash" character varying NOT NULL, "displayName" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "lLeftovers"`, undefined);
  }
}
