import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1761700998710 implements MigrationInterface {
    name = 'InitSchema1761700998710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`factura\` ADD \`numero\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`factura\` DROP COLUMN \`numero\``);
    }

}
