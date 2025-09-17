import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1758075024045 implements MigrationInterface {
    name = 'InitSchema1758075024045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`evaluacion\` DROP COLUMN \`nota\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` ADD \`nota\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`evaluacion_alumno\` DROP COLUMN \`nota\``);
        await queryRunner.query(`ALTER TABLE \`evaluacion\` ADD \`nota\` int NOT NULL`);
    }

}
