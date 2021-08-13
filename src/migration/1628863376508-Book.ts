import {MigrationInterface, QueryRunner} from "typeorm";

export class Book1628863376508 implements MigrationInterface {
    name = 'Book1628863376508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "isbn" character varying NOT NULL, "description" character varying NOT NULL, "getDate" character varying NOT NULL, "currentPage" integer NOT NULL, "allPages" integer NOT NULL, "isDone" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
