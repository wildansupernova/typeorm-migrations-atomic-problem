import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationName21615346215625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        throw new Error("aahahahahha")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
