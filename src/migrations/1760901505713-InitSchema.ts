import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1760901505713 implements MigrationInterface {
    name = 'InitSchema1760901505713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP FOREIGN KEY \`FK_826608eaed330943de819b40e84\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`contratosId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`contratosId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD CONSTRAINT \`FK_826608eaed330943de819b40e84\` FOREIGN KEY (\`contratosId\`) REFERENCES \`contrato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
