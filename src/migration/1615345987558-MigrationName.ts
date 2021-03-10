import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationName1615345987558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "ALTER TABLE `sdasd` ADD `cc` INT NOT NULL AFTER `id`",
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "ALTER TABLE `sdasd` DROP `cc`",
        );
      }

}
